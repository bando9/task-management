import slugify from "slugify";

const dataPost = [
  {
    id: 1,
    title: "dkjalwdkwjd (dakwjd)",
  },
  {
    id: 2,
    title: "fsdfns 8fsdkfjs 09sfesfskf (dkwd)",
  },
];

export function SlugifyString() {
  const postTitle = "Explore React Js Library (Slugify)";
  const slug = slugify(postTitle, {
    replacement: "_",
    remove: /[*+~.()'"!:@]/g,
  });

  return (
    <>
      <h1 className="mb-5">From Slugify</h1>
      {dataPost.map((post) => {
        const { title } = post;
        const slugPost = slugify(title, { remove: /[*+~.()'"!:@]/g });
        return <p> {slugPost} </p>;
      })}
      <p className="mt-2">{slug}</p>
    </>
  );
}
