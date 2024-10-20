import { FC } from 'react';

type Props = {
  title: string;
  description: string;
  url: string;
  image?: string;
};

const SocialMediaMetaTags: FC<Props> = ({ title, description, url, image }) => {
  const defaultImage = '/social_media_links_sharing_default.png';

  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:type" content="article" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image || defaultImage} />
    </>
  );
};

export default SocialMediaMetaTags;
