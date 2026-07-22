export type Category =
  | "Podcasts"
  | "Articles"
  | "Newsletters"
  | "Recipes"
  | "Fitness"
  | "Meditation";

export type Resource = {
  id: string;
  category: Category;
  title: string;
  thumbnail: string;
  tags: string[];
  duration: number;
  description: string;
  date_uploaded: string;
};

export type Sort = "newest" | "oldest";
