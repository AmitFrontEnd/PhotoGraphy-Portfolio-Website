import { useState } from "react"
import Masonry from "react-masonry-css"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { Camera } from "lucide-react"


const breakpoints = {
  default: 3,
  1024: 2,
  640: 1
}

const PortfolioGallery = ({data}) => {

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <section className="max-w-6xl mx-auto py-20 px-10">

      <h2 className="text-4xl font-bold text-center mb-12">
        Our Portfolio
      </h2>

      <Masonry
        breakpointCols={breakpoints}
        className="flex gap-6"
        columnClassName="space-y-6"
      >

        {data.map((img, i) => (
          <div
            key={i}
            className="relative group overflow-hidden rounded-xl cursor-pointer"
            onClick={() => {
              setIndex(i)
              setOpen(true)
            }}
          >

            <img
              src={img.src}
              className="w-full group-hover:scale-110 transition duration-500"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

              <Camera className="text-white w-8 h-8" />

            </div>

          </div>
        ))}

      </Masonry>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={data}
      />

    </section>
  )
}

export default PortfolioGallery