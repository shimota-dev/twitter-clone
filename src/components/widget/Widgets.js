import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterFollowButton,
	TwitterHashtagButton,
	TwitterMentionButton,
	TwitterTweetEmbed,
	TwitterMomentShare,
	TwitterDMButton,
	TwitterVideoEmbed,
	TwitterOnAirButton,
} from "react-twitter-embed";

function Widgets() {
	return (
		<div className="widgets">
			<div className="widgets__input">
				<SearchIcon className="widgets__searchIcon" />
				<input placeholder="キーワード検索" type="text" />
			</div>

			<div className="widgets__Container">
				<h2>いまどうしてる？</h2>
				{/* ライブラリ追加 */}
				<TwitterTweetEmbed tweetID={'1643572400595021824'} />
				<TwitterTimelineEmbed sourceType="profile" screenName="MikaPikaZo" options={{ height: 400 }} />
				<TwitterShareButton url={"https://twitter.com/MikaPikaZo"} options={{ text: "#reactjs is awesome", via: "MikaPikaZo" }} />
			</div>
		</div>
	);
}

export default Widgets;
