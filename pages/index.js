import Head from 'next/head'
import React from 'react'

export default function Home() {
  class ButtonRow extends React.Component {
    render() {
      return <div class="flex items-stretch h-24">{this.props.children}</div>
    }
  }

  class CircleButton extends React.Component {
    render() {
      return (
        <div className="flex-1 px-2 py-2 justify-center flex items-center text-2xl font-semibold">
          <div className="rounded-full h-20 w-20 flex items-center justify-center shadow-lg border-2 border-purple-700 hover:border-2 hover:border-red-400 focus:outline-none cursor-pointer select-none">
            {this.props.text}
          </div>
        </div>
      )
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Lab13</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-50 text-center">
        <div class="mx-auto overflow-hidden mt-10 mb-2 shadow-lg border rounded-lg md:w-3/6 sm:w-4/6">
          <div class="">
            <div class="p-5 text-center text-3xl border-b-2">Calculadora</div>
            <div class="pt-8 p-5 pb-0 text-right text-2xl">2000 + 100</div>
            <div class="p-5 text-right text-4xl border-b-2">
              = <span class="text-red-400 font-bold">2100</span>
            </div>

            <div class="py-8">
              <ButtonRow>
                <CircleButton text="%" />
                <CircleButton text="(" />
                <CircleButton text=")" />
                <CircleButton text="+" />
              </ButtonRow>

              <ButtonRow>
                <CircleButton text="7" />
                <CircleButton text="8" />
                <CircleButton text="9" />
                <CircleButton text="×" />
              </ButtonRow>

              <ButtonRow>
                <CircleButton text="4" />
                <CircleButton text="5" />
                <CircleButton text="6" />
                <CircleButton text="-" />
              </ButtonRow>

              <ButtonRow>
                <CircleButton text="1" />
                <CircleButton text="2" />
                <CircleButton text="3" />
                <CircleButton text="+" />
              </ButtonRow>

              <ButtonRow>
                <CircleButton text="+" />
                <CircleButton text="0" />
                <CircleButton text="." />
                <CircleButton text="=" />
              </ButtonRow>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://github.com/abrlipac"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>Abraham Lipa Calabilla (2019064039)</div>
          <br />
          <div>@abrlipac</div>
        </a>
      </footer>
    </div>
  )
}
