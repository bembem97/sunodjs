import Image from "next/image"

const CardHeader = (
  { author, avatar, datePosted, thumbnail, width, height, ...props },
  ref
) => {
  return (
    <>
      <div
        {...props}
        className={`card__header ${props.className || ""}`.trim()}
      >
        {/* //*: THUMBNAIL */}
        {thumbnail && (
          <div className="card__thumbnail pt-3 bg-emerald-100">
            <Image
              src={thumbnail}
              alt="thumbnail"
              width={width || 75}
              height={height || 50}
              layout="responsive"
              quality={30}
              className="card__thumbnail-image object-cover"
            />
          </div>
        )}

        {/* //*: Card Header (author info) */}
        {(avatar || author || datePosted) && (
          <div className={`card__header-content flex py-2 px-4`}>
            {/* // todo: AVATAR */}
            {avatar && (
              <span className="card__avatar mr-3">
                <Image
                  src={avatar}
                  height={45}
                  width={45}
                  alt="avatar"
                  className="card__avatar-image object-cover rounded-full"
                />
              </span>
            )}

            {/* //*: HEADER LABEL */}
            {(author || datePosted) && (
              <div className="card__label flex w-full justify-between">
                {author && (
                  <span className="card__author text-sm font-semibold">
                    {author}
                  </span>
                )}
                {datePosted && (
                  <span className="card__date text-sm text-gray-500 text-right">
                    {datePosted}
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default CardHeader
