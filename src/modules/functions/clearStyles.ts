export default function clearStyles() {
  const jssStyles = document.querySelector('#jss-server-side');
  if (jssStyles) {
    jssStyles.parentElement!.removeChild(jssStyles);
  }
}