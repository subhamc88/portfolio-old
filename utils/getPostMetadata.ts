import matter from "gray-matter";
import postMetadataInterface from "./postMetadataInterface";

export default function getPostMetadata(filePath: string[]) {
	console.log(filePath);
	const postMetadataCollection = []

	for (let file of filePath) {
		const { data } = matter.read(file)
		const postMetadata: postMetadataInterface = {
			title: data.title,
			date: data.date,
			author: data.author,
			category: data.category,
			tags: data.tags,
			description: data.description,
			draft: data.draft,
			image: data.image,
		}
		postMetadataCollection.push(postMetadata);
	}
	return postMetadataCollection;
}
