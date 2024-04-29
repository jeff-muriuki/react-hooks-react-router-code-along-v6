import React from 'react'
import { useRouteError } from 'react-router-dom'
import NavBar from '../components/NavBar';

export default function ErrorPage() {
    const error= useRouteError()
    console.error(error);
  return (
    <>
<header>
    <NavBar />
</header>
<main>
    <h1>
        Oops! Something went wrong!
    </h1>
</main>
    </>
  )
}
