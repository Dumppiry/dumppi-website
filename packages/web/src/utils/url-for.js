import imageUrlBuilder from "@sanity/image-url"
import clientConfig from "../../client-config"

const builder = imageUrlBuilder(clientConfig.sanity)

const urlFor = (source) => {
  return builder.image(source)
}

export default urlFor
