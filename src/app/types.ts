export interface Params {
  slug: string;
}

export interface Meta {
  title: string;
  date: string;
  category: string;
  description: string;
  ogImage?: string;
  image?: string;
}

export interface PageContent {
  meta: Meta;
  content: string;
}

export interface Metadata {
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
}
