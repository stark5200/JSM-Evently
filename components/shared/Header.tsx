// remember import shortcut ctrl + space
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flexitems-center justify-between">
        <Link href="/" className="w-36">
          <Image src="/assets/images/logo.svg" width={128} height={38} alt="Evently logo"/>
          <div className="flex w-32 justify-end gap-3">
            
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header