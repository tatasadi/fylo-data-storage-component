import Reference from "./components/Reference"
import Image from "next/image"
import logo from "@/public/images/logo.svg"
import iconFolder from "@/public/images/icon-folder.svg"
import iconUpload from "@/public/images/icon-upload.svg"
import iconDocument from "@/public/images/icon-document.svg"
import RangeSlider from "./components/RangeSlider"

export default function Home() {
  return (
    <main className="flex h-full min-h-screen w-full max-w-7xl flex-col items-center px-4 pt-20 lg:min-h-0 lg:pt-32">
      <h1 className="sr-only">Fylo Data Storage Component</h1>
      <div className="flex min-w-80 flex-col gap-4 lg:flex-row lg:items-end lg:gap-8">
        <div className="rounded-[0.625rem] rounded-tr-[6.25rem] bg-neutral-dark-blue p-10 shadow-[0_75px_100px_-30px_rgba(0,0,0,0.25)] lg:min-w-80">
          <div className="mb-8 w-[8.5rem]">
            <Image src={logo} alt="logo" layout="responsive" />
          </div>
          <div className="flex items-center gap-4">
            <div className="icon">
              <Image
                src={iconDocument}
                alt="icon-document"
                layout="responsive"
              />
            </div>
            <div className="icon">
              <Image src={iconFolder} alt="icon-folder" layout="responsive" />
            </div>
            <div className="icon">
              <Image src={iconUpload} alt="icon-upload" layout="responsive" />
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center rounded-[0.625rem] bg-neutral-dark-blue p-8 shadow-[0_75px_100px_-30px_rgba(0,0,0,0.25)] lg:w-[33rem] lg:items-start">
          <p className="text-sm leading-normal text-neutral-pale-blue">
            You’ve used <span className="font-bold">815 GB</span> of your
            storage
          </p>
          <RangeSlider startLabel="0 GB" endLabel="1000 GB" percentage={81.5} />
          <p className="absolute -bottom-10 flex items-center rounded-[0.625rem] bg-white px-6 py-4 text-[2.5rem] font-bold leading-10 text-neutral-very-dark-blue lg:-top-10 lg:bottom-auto lg:right-9">
            <span>185</span>
            <span className="ml-2 text-xs tracking-[0.0625rem] opacity-50">
              GB Left
            </span>
            <span className="absolute -bottom-4 right-0 hidden border-[1rem] border-white border-b-transparent border-l-transparent border-t-transparent lg:block"></span>
          </p>
        </div>
      </div>
      <Reference />
    </main>
  )
}
