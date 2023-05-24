import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
	return (
		<div className="widgets">
			<div className="widgets__input">
				<SearchIcon className="widgets__searchIcon" />
				<input placeholder="キーワード検索" type="text" />
			</div>

			<div className="widgets__widgetsContainer">
				<h2>いまどうしてる？</h2>
				{/* ライブラリ追加 */}
				<TwitterTweetEmbed tweetId={"1638797588421025792"} />

				<TwitterTimelineEmbed sourceType="profile" screenName="GitHubJapan" options={{ height: 400 }} />
				<TwitterShareButton url={"https://twitter.com/GitHubJapan"} options={{ text: "#React.js勉強中", via: "dev_minazuki" }} />
			</div>
		</div>
	);
}

export default Widgets;
