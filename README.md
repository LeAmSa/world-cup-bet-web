<a name="readme-top"></a>

[![MIT License][license-shield]][license-url] [![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="/public/logo-bg-white.svg" alt="Logo" width="200">
  </a>

  <h3 align="center">Na Trave</h3>
  <h4 align="center">Status: DONE ✅ </h4>
  <div align="center">
  <a href="https://natraveapostas.vercel.app" target="_blank">
	   🚀 Access the website on vercel
  </a>
  </div>
</div>

<br>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#settingapi">Setting API server</a></li>
        <li><a href="#running">Running the application</a></li>
      </ul>
    </li>
     <li><a href="#usage">Usage</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<a name="about-the-project"></a>

![screenshot][screenshot]

The objective was to develop a website for bets on group-stage matches of World Cup Qatar 2022.

_Project developed during the event from [Codar.me](https://codar.me/input)._

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<a name="built-with"></a>

This project was built with the following main frameworks/libraries.

- [![Vite][vite-badge]][vite-url]
- [![React][react.js]][react-url]
- [![Javascript][javascript-badge]][javascript-url]
- [![Tailwind][tailwindcss-badge]][tailwind-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

<a name="getting-started"></a>

### Prerequisites

<a name="prerequisites"></a>

- Resources needed
  - [Git][git-url]
  - [Node.js][nodejs-url]
  - A code editor (ex: [Visual Studio Code][vscode-url])

### Installation

<a name="installation"></a>

1. Clone the repo
   ```sh
   git clone https://github.com/LeAmSa/world-cup-bet-web.git
   ```
2. Enter the project folder
   ```sh
   cd world-cup-bet-web
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

### Setting API server

<a name="settingapi"></a>

1. The server API for this project is present in my other repo named [world-cup-bet-server](https://github.com/LeAmSa/world-cup-bet-server). Follow the installation steps to put the API on.

2. Create (in world-cup-bet-web) a `.env` file and enter your API key like in `.env.example`
   ```js
   VITE_API_URL = "ENTER YOUR API";
   ```

### Running the application

<a name="running"></a>

- Run the application in dev mode
  ```sh
   npm run dev
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Usage -->

## Usage

<a name="usage"></a>

The bet registration in the API database uses the `onBlur` property from `<input/>`, so all you need to do is fill in the fields.

![Dashboard][dashboard]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Features -->

## Features

<a name="features"></a>

- [x] User create account
- [x] User login
- [x] Bets on group-stage matches
- [x] Access user profile with bets records
- [x] Responsive

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

<a name="license"></a>

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

<a name="acknowledgments"></a>

Here are some useful resources/libraries used during the development.

- [Formik][formik-url]
- [Yup][yup-url]
- [date-fns][date-fns-url]
- [React loader spinner][react-loader-spinner-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[screenshot]: https://drive.google.com/uc?id=1uxIQOhUHVcKKv93kzCsB0JCuHduMkAwM
[dashboard]: https://drive.google.com/uc?id=1ttoWNITCnIVEliTUuT4zYkHVYw_F5t0b
[license-shield]: https://img.shields.io/github/license/LeAmSa/world-cup-bet-web?style=for-the-badge
[license-url]: https://github.com/LeAmSa/world-cup-bet-web/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/leandroamorimsalles1994
[git-url]: https://git-scm.com/
[nodejs-url]: https://nodejs.org/en/
[vscode-url]: https://code.visualstudio.com/
[vite-badge]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[vite-url]: https://vitejs.dev/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[tailwindcss-badge]: https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwind-url]: https://tailwindcss.com/
[typescript-badge]: https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[javascript-url]: https://www.javascript.com/
[javascript-badge]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white
[formik-url]: https://formik.org/
[yup-url]: https://www.npmjs.com/package/yup
[date-fns-url]: https://date-fns.org/
[react-loader-spinner-url]: https://mhnpd.github.io/react-loader-spinner/
