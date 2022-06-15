const Tutors = [
	{
		id: "1",
		name: "Keir Gamble",
		picture: require("../img/tutors/tutor-1.png"),
		hobby: "baking",
		about:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem nisi. Aliquam ultricies pharetra rhoncus. Vestibulum faucibus id mauris at hendrerit. Vestibulum consectetur mi nec nunc auctor dapibus vel vel magna. Vivamus aliquet arcu est, ut rhoncus lectus pretium vestibulum. Quisque commodo, magna ac lobortis ultricies, massa velit ornare.",
		distance: "5",
		price: "20",
		languages: ["English", "Portuguese"],
	},
	{
		id: "2",
		name: "Alexie Pittman",
		picture: require("../img/tutors/tutor-6.png"),
		hobby: "baking",
		about:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem nisi. Aliquam ultricies pharetra rhoncus. Vestibulum faucibus id mauris at hendrerit. Vestibulum consectetur mi nec nunc auctor dapibus vel vel magna. Vivamus aliquet arcu est, ut rhoncus lectus pretium vestibulum. Quisque commodo, magna ac lobortis ultricies, massa velit ornare.",
		distance: "11",
		price: "15",
		languages: ["English"],
	},
	{
		id: "3",
		name: "Ernest Mcconnell",
		picture: require("../img/tutors/tutor-4.png"),
		hobby: "baking",
		about:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem nisi. Aliquam ultricies pharetra rhoncus. Vestibulum faucibus id mauris at hendrerit. Vestibulum consectetur mi nec nunc auctor dapibus vel vel magna. Vivamus aliquet arcu est, ut rhoncus lectus pretium vestibulum. Quisque commodo, magna ac lobortis ultricies, massa velit ornare.",
		distance: "3",
		price: "26",
		languages: ["English", "Italian"],
	},
	{
		id: "4",
		name: "Claudie Gabrielle",
		picture: require("../img/tutors/tutor-5.png"),
		hobby: "gardening",
		about:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem nisi. Aliquam ultricies pharetra rhoncus. Vestibulum faucibus id mauris at hendrerit. Vestibulum consectetur mi nec nunc auctor dapibus vel vel magna. Vivamus aliquet arcu est, ut rhoncus lectus pretium vestibulum. Quisque commodo, magna ac lobortis ultricies, massa velit ornare.",
		distance: "20",
		price: "12",
		languages: ["French", "Spanish"],
	},
	{
		id: "5",
		name: "Steve Roy",
		picture: require("../img/tutors/tutor-2.png"),
		hobby: "gardening",
		about:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem nisi. Aliquam ultricies pharetra rhoncus. Vestibulum faucibus id mauris at hendrerit. Vestibulum consectetur mi nec nunc auctor dapibus vel vel magna. Vivamus aliquet arcu est, ut rhoncus lectus pretium vestibulum. Quisque commodo, magna ac lobortis ultricies, massa velit ornare.",
		distance: "30",
		price: "16",
		languages: ["Korean", "English"],
	},
	{
		id: "6",
		name: "Isabella Adelia",
		picture: require("../img/tutors/tutor-3.png"),
		hobby: "gardening",
		about:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem nisi. Aliquam ultricies pharetra rhoncus. Vestibulum faucibus id mauris at hendrerit. Vestibulum consectetur mi nec nunc auctor dapibus vel vel magna. Vivamus aliquet arcu est, ut rhoncus lectus pretium vestibulum. Quisque commodo, magna ac lobortis ultricies, massa velit ornare.",
		distance: "7",
		price: "10",
		languages: ["English", "German"],
	},
	{
		id: "7",
		name: "Abdurrahman Whelan",
		picture: require("../img/tutors/tutor-4.png"),
		hobby: "gardening",
		about:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem nisi. Aliquam ultricies pharetra rhoncus. Vestibulum faucibus id mauris at hendrerit. Vestibulum consectetur mi nec nunc auctor dapibus vel vel magna. Vivamus aliquet arcu est, ut rhoncus lectus pretium vestibulum. Quisque commodo, magna ac lobortis ultricies, massa velit ornare.",
		distance: "14",
		price: "11",
		languages: ["Arabic", "French"],
	},
	{
		id: "8",
		name: "Arissa Kent",
		picture: require("../img/tutors/tutor-5.png"),
		hobby: "music",
		about:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem nisi. Aliquam ultricies pharetra rhoncus. Vestibulum faucibus id mauris at hendrerit. Vestibulum consectetur mi nec nunc auctor dapibus vel vel magna. Vivamus aliquet arcu est, ut rhoncus lectus pretium vestibulum. Quisque commodo, magna ac lobortis ultricies, massa velit ornare.",
		distance: "6",
		price: "25",
		languages: ["English"],
	},
	{
		id: "9",
		name: "Paula Santos",
		picture: require("../img/tutors/tutor-6.png"),
		hobby: "music",
		about:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem nisi. Aliquam ultricies pharetra rhoncus. Vestibulum faucibus id mauris at hendrerit. Vestibulum consectetur mi nec nunc auctor dapibus vel vel magna. Vivamus aliquet arcu est, ut rhoncus lectus pretium vestibulum. Quisque commodo, magna ac lobortis ultricies, massa velit ornare.",
		distance: "13",
		price: "5",
		languages: ["Portuguese", "Italian"],
	},
	{
		id: "10",
		name: "Chen Yang",
		picture: require("../img/tutors/tutor-2.png"),
		hobby: "music",
		about:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem nisi. Aliquam ultricies pharetra rhoncus. Vestibulum faucibus id mauris at hendrerit. Vestibulum consectetur mi nec nunc auctor dapibus vel vel magna. Vivamus aliquet arcu est, ut rhoncus lectus pretium vestibulum. Quisque commodo, magna ac lobortis ultricies, massa velit ornare.",
		distance: "2",
		price: "18",
		languages: ["English"],
	},
	{
		id: "11",
		name: "Zack Haworth",
		picture: require("../img/tutors/tutor-1.png"),
		hobby: "music",
		about:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem nisi. Aliquam ultricies pharetra rhoncus. Vestibulum faucibus id mauris at hendrerit. Vestibulum consectetur mi nec nunc auctor dapibus vel vel magna. Vivamus aliquet arcu est, ut rhoncus lectus pretium vestibulum. Quisque commodo, magna ac lobortis ultricies, massa velit ornare.",
		distance: "33",
		price: "24",
		languages: ["English", "Spanish"],
	},
	{
		id: "12",
		name: "Emilee Tyron",
		picture: require("../img/tutors/tutor-3.png"),
		hobby: "yoga",
		about:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem nisi. Aliquam ultricies pharetra rhoncus. Vestibulum faucibus id mauris at hendrerit. Vestibulum consectetur mi nec nunc auctor dapibus vel vel magna. Vivamus aliquet arcu est, ut rhoncus lectus pretium vestibulum. Quisque commodo, magna ac lobortis ultricies, massa velit ornare.",
		distance: "17",
		price: "7",
		languages: ["English", "French"],
	},
	{
		id: "13",
		name: "Guo Zan",
		picture: require("../img/tutors/tutor-2.png"),
		hobby: "yoga",
		about:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec lorem nisi. Aliquam ultricies pharetra rhoncus. Vestibulum faucibus id mauris at hendrerit. Vestibulum consectetur mi nec nunc auctor dapibus vel vel magna. Vivamus aliquet arcu est, ut rhoncus lectus pretium vestibulum. Quisque commodo, magna ac lobortis ultricies, massa velit ornare.",
		distance: "9",
		price: "10",
		languages: ["Chinese", "Portuguese", "English"],
	},
];

export default Tutors;