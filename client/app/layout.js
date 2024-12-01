'use client'

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import { Inter } from 'next/font/google'
import { useMemo } from 'react'

import '@solana/wallet-adapter-react-ui/styles.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout() {
  const network = WalletAdapterNetwork.Devnet
  const endpoint = useMemo(() => clusterApiUrl(network), [network])
  const wallets = useMemo(() => [new PhantomWalletAdapter()], [])

  return (
    <html lang="en">
      <body className={inter.className}>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <div className="flex flex-col min-h-screen">
                <header className="bg-yellow-500 p-4">
                  <nav className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-white">Goldy</h1>
                    <div className="wallet-adapter-button-trigger"></div>
                  </nav>
                </header>
                <main className="flex-grow container mx-auto px-4 py-8">
                  {children}
                </main>
                <footer className="bg-gray-800 text-white p-4">
                  <div className="container mx-auto text-center">
                    © 2023 Goldy. All rights reserved.
                  </div>
                </footer>
              </div>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </body>
    </html>
  )
}

