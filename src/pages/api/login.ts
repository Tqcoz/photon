import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next"
import { auth } from "../../api"

export const Login = async (req:NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body;
    const codeData = await auth.post('/login', {
      email,
      password
    })
    if (codeData.status !== 200) {
      return res.status(409).json({
        error: 'An error occured when logging in. Most likely invalid details.'
      })
    }
    let tokens = await auth.get(`/token?code=${codeData.data.code}&grant_type=login`)
    if (tokens.status !== 200) {
      return res.status(409).json({
        error: 'An error occured when logging in. Most likely a server error, retry login.'
      })
    }
    res.setHeader('Set-Cookie', [
      serialize('token', tokens.data.accessToken, {
        path: '/',
        sameSite: "strict",
        secure: true,
        expires: new Date(Date.now() + 300000)
      }),
      serialize('refresh', tokens.data.refreshToken, {
        path: '/',
        sameSite: "strict",
        secure: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
      }),
    ])
    res.status(200).json({
      success: "true",
      user: {
        accessToken: tokens.data.accessToken,
        refreshToken: tokens.data.refreshToken,
      }
    })
  } catch (error) {
    return res.status(409).json({
      error: 'An error occured when logging in. Most likely a server error, retry login.'
    })
  }
  
}