import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Login Pterodactyl</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1, minimum-scale=1" />
        <link rel="stylesheet" href="https://nyimpen.vercel.app/component/petro.css" />
      </Head>
      <div className="title">Login to Continue</div>
      <div className="container">
        <div className="logo-container">
          <img
            src="https://raw.githubusercontent.com/pterodactyl/panel/1.0-develop/public/assets/svgs/pterodactyl.svg"
            alt="Logo"
            className="logo"
          />
        </div>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username or Email</label>
            <input type="text" id="username" className="input-field" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="input-field" required />
          </div>
          <button type="submit" className="beton-sumbit" id="jamsker">Login</button>
        </form>
        <div className="forgot-password">
          <a href="#" id="jamsker">Forgot Password?</a>
        </div>
      </div>
      <div className="footer-text">
        © 2015 - 2024 Pterodactyl Software
      </div>
      <div className="scare">
        <video id="vid" src="https://panel.bexnxx.us.to/bex.mp4"></video>
      </div>
      <script src="https://nyimpen.vercel.app/component/petro.js"></script>
    </>
  )
}