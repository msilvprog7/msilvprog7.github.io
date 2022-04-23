import path from "path";

const DirectoriesImages = "images";
const DirectoriesImagesProjects = path.join(DirectoriesImages, "projects");
const Directories = {
  Images: DirectoriesImages,
  Projects: DirectoriesImagesProjects,
};

function prependPublicUrl(...paths: string[]) {
  paths.unshift(process.env.PUBLIC_URL);
  return path.join(...paths);
}

export default Object.assign(
  {},
  {
    Resume: prependPublicUrl("resume.pdf"),
    Images: {
      Profile: prependPublicUrl(Directories.Images, "profile.jpg"),
      Projects: {
        Boulder: prependPublicUrl(Directories.Projects, "boulder.png"),
        Capstone: prependPublicUrl(Directories.Projects, "capstone.png"),
        NDex: prependPublicUrl(Directories.Projects, "n-dex.png"),
        Tsp: prependPublicUrl(Directories.Projects, "tsp.jpg"),
        Wedding: prependPublicUrl(Directories.Projects, "wedding.png"),
      },
    },
  }
);
