type CategoryImage = {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: string[] | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: null | any;
  createdAt: string;
  updatedAt: string;
};

type Category = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  rank: number;
  image: CategoryImage;
};

type CategoriesApiResponse = {
  data: Array<Category>;
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export { CategoriesApiResponse, Category, CategoryImage };
