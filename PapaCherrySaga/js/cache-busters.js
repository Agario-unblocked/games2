(function(root, factory) {
	var target = typeof module === "object" && module.exports
		? module.exports
		: root

	Object.assign(target, factory())
})(typeof self !== "undefined" ? self : this, function() {
	return {
		cacheBustingMethod: "query-strings",
		cacheBusters: {
			"css/bundle.min.css": "123d1291a5",
			"css/editor.css": "07ff273955",
			"css/fonts.css": "abf27c5987",
			"css/fullscreen-enter.svg": "9d8e95ecb5",
			"css/fullscreen-exit.svg": "43ddf1ebcb",
			"css/icon.png": "97da252bc7",
			"css/icon.webp": "7f87c9a5d9",
			"js/game.js": "4fe477d26c",
			"js/game.min.js": "de38ab0dcf",
			"js/GameAnalytics.min.js": "6c210824c0",
			"js/tweakpane.min.js": "c236b1cc0c",
			"js/vendor.min.js": "707df50f35",
			"assets/audio/apple_collect.mp3": "dbab23d996",
			"assets/audio/bomb_1.mp3": "522eada047",
			"assets/audio/bomb_created.mp3": "35ff38136b",
			"assets/audio/bomb_ignite.mp3": "11bdc07679",
			"assets/audio/booster_cant.mp3": "56b2114eda",
			"assets/audio/booster_glove_2.mp3": "b6dc23e211",
			"assets/audio/booster_land.mp3": "87db042749",
			"assets/audio/booster_lollipop.mp3": "4090ff6838",
			"assets/audio/booster_piping_bag.mp3": "2a1ee5ec36",
			"assets/audio/booster_whoosh.mp3": "4d8351cfc8",
			"assets/audio/candy_bottle_open.mp3": "b304abfaf3",
			"assets/audio/cant_swap_1.mp3": "7d22e81866",
			"assets/audio/chick_1.mp3": "b1abac92f5",
			"assets/audio/coin_add_5.mp3": "5cbc16c8ad",
			"assets/audio/coin_spend.mp3": "2f7fe9e9ae",
			"assets/audio/color_cake_bite.mp3": "f3ccdc9836",
			"assets/audio/color_cake_explode.mp3": "0dce8b07ba",
			"assets/audio/color_cake_inflate.mp3": "3b270c35a9",
			"assets/audio/cookie_collect.mp3": "fbc29c4033",
			"assets/audio/cookie_unlock.mp3": "21ae28bdd9",
			"assets/audio/cupcake_1.mp3": "58b219452e",
			"assets/audio/donut_bite.mp3": "16eb96c158",
			"assets/audio/donut_box_close.mp3": "f36c4df25f",
			"assets/audio/double_spheres_charge.mp3": "51875c46c8",
			"assets/audio/double_spheres_explode.mp3": "978621e2a1",
			"assets/audio/drop_item_collect.mp3": "bd5f5f7a0b",
			"assets/audio/extra_moves.mp3": "4ae0541215",
			"assets/audio/fancy_tap.mp3": "889470dfc7",
			"assets/audio/generator_1.mp3": "14a531d0a3",
			"assets/audio/gift_drop.mp3": "aafb0b24e7",
			"assets/audio/gift_explode.mp3": "58e6d67305",
			"assets/audio/gift_reveal.mp3": "a2da2552fe",
			"assets/audio/goal_complete.mp3": "7b2acf8d96",
			"assets/audio/goal_update_3.mp3": "0610861c31",
			"assets/audio/gummy_1.mp3": "d58831802e",
			"assets/audio/gummy_block_drop_3.mp3": "3e5f32f1cd",
			"assets/audio/level_failed_2.mp3": "eb0462a96e",
			"assets/audio/level_icon_unlock_2.mp3": "d013493a78",
			"assets/audio/level_pre_complete_2.mp3": "aa70899520",
			"assets/audio/level_pre_complete_music.mp3": "d183c1aa85",
			"assets/audio/life_granted_2.mp3": "76955690e9",
			"assets/audio/match_1.mp3": "1c95e15554",
			"assets/audio/match_2.mp3": "26ba32b8b3",
			"assets/audio/match_3.mp3": "56e1ffd141",
			"assets/audio/match_4.mp3": "19423b1e8c",
			"assets/audio/match_5.mp3": "36d397a6bb",
			"assets/audio/moves_warning.mp3": "034ac07fcc",
			"assets/audio/music_loop_short.mp3": "66c151acbc",
			"assets/audio/mystery_box_1.mp3": "4ea1828c14",
			"assets/audio/out_of_moves.mp3": "87a0c09e6c",
			"assets/audio/powerup_from_chef.mp3": "038e48ae27",
			"assets/audio/powerup_to_chef.mp3": "604cc444a1",
			"assets/audio/shop_open_2.mp3": "cd5975935c",
			"assets/audio/shuffle_2.mp3": "15ef44d7c0",
			"assets/audio/sphere_created.mp3": "3abe7a4df7",
			"assets/audio/star_whoosh.mp3": "39a8deb123",
			"assets/audio/stripes_3.mp3": "78bbc2cf40",
			"assets/audio/stripes_created.mp3": "90ec7cf07c",
			"assets/audio/super_sphere.mp3": "238b1f71e4",
			"assets/audio/swap_1.mp3": "0e3dc3a2fe",
			"assets/audio/swap_back_3.mp3": "67b2d49da8",
			"assets/audio/tap.mp3": "df6989e2b3",
			"assets/audio/twinkle_1.mp3": "d6b863e995",
			"assets/audio/twinkle_2.mp3": "c4bc46af63",
			"assets/audio/twinkle_3.mp3": "c49b203444",
			"assets/audio/twinkle_4.mp3": "45932fe458",
			"assets/audio/undo.mp3": "f69bc00c59",
			"assets/audio/victory.mp3": "b815990c74",
			"assets/audio/warning.mp3": "a6ab54060c",
			"assets/audio/wheel_open.mp3": "977eec37ad",
			"assets/audio/wheel_reward.mp3": "5bcbac3235",
			"assets/audio/wheel_spin_tick_2.mp3": "eaa7d5b3cc",
			"assets/audio/whoosh_1.mp3": "b3a0cdf14a",
			"assets/audio/whoosh_2.mp3": "3475136a79",
			"assets/configs/level_map_config.json": "f8f2add2a8",
			"assets/configs/levels.json": "cf47db4764",
			"assets/configs/shop_offers.json": "894a1277af",
			"assets/fonts/bitmap/booster_labels.xml": "7821c0d5c9",
			"assets/fonts/bitmap/field_labels.png": "63d6ca3897",
			"assets/fonts/bitmap/field_labels.xml": "209885de5b",
			"assets/fonts/bitmap/generator_turns.png": "2fe8f6e414",
			"assets/fonts/bitmap/generator_turns.xml": "713d4ac882",
			"assets/fonts/bitmap/goal_num_label.png": "14596c824b",
			"assets/fonts/bitmap/goal_num_label.xml": "b8e2f13ded",
			"assets/fonts/bitmap/grid_labels.png": "905d8ef46a",
			"assets/fonts/bitmap/grid_labels.xml": "dc02d09ded",
			"assets/fonts/bitmap/labels.png": "2017b3b9fd",
			"assets/fonts/bitmap/labels.xml": "70139b318f",
			"assets/fonts/bitmap/level_icon_font.png": "bfecd83e25",
			"assets/fonts/bitmap/level_icon_font.xml": "fc64d538d7",
			"assets/fonts/bitmap/level_icons_classic.xml": "7a108463c6",
			"assets/fonts/bitmap/level_icons_hard.xml": "1d719a603b",
			"assets/fonts/bitmap/level_map_bottom_labels.png": "8905b4b5ca",
			"assets/fonts/bitmap/level_map_bottom_labels.xml": "bcd4fd400d",
			"assets/fonts/bitmap/level_map_top_panel_font.png": "4c9f1d3dcb",
			"assets/fonts/bitmap/level_map_top_panel_font.xml": "c1ddd25743",
			"assets/fonts/bitmap/levels_list.png": "cba353a178",
			"assets/fonts/bitmap/levels_list.xml": "83a00c8adc",
			"assets/fonts/bitmap/moves_label.png": "788533bcd3",
			"assets/fonts/bitmap/moves_label.xml": "758918081d",
			"assets/fonts/bitmap/powerup_chef_label.png": "d3cd97ea37",
			"assets/fonts/bitmap/powerup_chef_label.xml": "c34149f53b",
			"assets/fonts/bitmap/pregame_boosters_labels.png": "4fb03ec783",
			"assets/fonts/bitmap/pregame_boosters_labels.xml": "f25fee7f00",
			"assets/fonts/bitmap/shop_coins.png": "3e0b072bf6",
			"assets/fonts/bitmap/shop_coins.xml": "9f130a1f5b",
			"assets/fonts/bitmap/top_panel_goal_labels.png": "017dd1d4d8",
			"assets/fonts/bitmap/top_panel_goal_labels.xml": "8fa0396595",
			"assets/fonts/web/PoetsenOne-Regular-2.woff2": "e343ff7ed3",
			"assets/fonts/web/PoetsenOne-Regular.woff": "72e6a6cadb",
			"assets/graphics/editor.avif": "ac6cbddc2d",
			"assets/graphics/editor.json": "3012244b46",
			"assets/graphics/editor.png": "720bbeba9c",
			"assets/graphics/editor.webp": "31d3801dab",
			"assets/graphics/gameplay_bg_1.avif": "c20a9088dc",
			"assets/graphics/gameplay_bg_1.jpg": "9a2d0ffebb",
			"assets/graphics/gameplay_bg_1.webp": "d8b84069e8",
			"assets/graphics/gameplay_gui.avif": "724f15b41a",
			"assets/graphics/gameplay_gui.json": "91066dc130",
			"assets/graphics/gameplay_gui.png": "110d9aeb96",
			"assets/graphics/gameplay_gui.webp": "c11e5b29d3",
			"assets/graphics/gameplay.avif": "6c65e2b956",
			"assets/graphics/gameplay.json": "c35f656019",
			"assets/graphics/gameplay.png": "c832fb4265",
			"assets/graphics/gameplay.webp": "be47ca24a1",
			"assets/graphics/level_map_1.avif": "b819e06365",
			"assets/graphics/level_map_1.jpg": "1b2e8fa135",
			"assets/graphics/level_map_1.webp": "cef9e69bee",
			"assets/graphics/level_map_2.avif": "14aa14e578",
			"assets/graphics/level_map_2.jpg": "8450397512",
			"assets/graphics/level_map_2.webp": "560b47f2e4",
			"assets/graphics/level_map_3.avif": "4ab7cafcde",
			"assets/graphics/level_map_3.jpg": "0b19c828e2",
			"assets/graphics/level_map_3.webp": "8c444314c0",
			"assets/graphics/level_map_4.avif": "b5732793e9",
			"assets/graphics/level_map_4.jpg": "be43ec5b68",
			"assets/graphics/level_map_4.webp": "39e5686f65",
			"assets/graphics/level_map.avif": "3a2ce360a4",
			"assets/graphics/level_map.json": "a667b23b08",
			"assets/graphics/level_map.png": "3579c34716",
			"assets/graphics/level_map.webp": "c8924dbe21",
			"assets/graphics/page_background.avif": "466e781bef",
			"assets/graphics/page_background.jpg": "cfb8b17b48",
			"assets/graphics/page_background.webp": "a40f530999",
			"assets/graphics/popups_2.avif": "2a3ec9ca57",
			"assets/graphics/popups_2.png": "cea9b773ac",
			"assets/graphics/popups_2.webp": "257e4a25b9",
			"assets/graphics/popups.avif": "12696dd0d8",
			"assets/graphics/popups.json": "a62fa2452c",
			"assets/graphics/popups.png": "17dcc8eec0",
			"assets/graphics/popups.webp": "bda432efe8",
			"assets/graphics/rewards.avif": "5175dd6319",
			"assets/graphics/rewards.json": "9c91cbca56",
			"assets/graphics/rewards.png": "2c6af97dda",
			"assets/graphics/rewards.webp": "9ebefd4aee",
			"assets/replay.json": "c443b04d0f",
			"assets/texts.json": "68cb6f95c7",
			"js/cache-busters.js": "cd1809849c"
},
	}
})
