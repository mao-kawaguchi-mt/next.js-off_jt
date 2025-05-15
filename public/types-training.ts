type user = {
	name: string;
	age: number;
	fruits: string[];
};

const user: user = {
	name: "Hanako",
	age: 20,
	fruits: ["りんご", "バナナ", "みかん"],
};

function getProfile(name: string, age: number): string {
	return `${user.name} (${user.age}歳)`;
}
