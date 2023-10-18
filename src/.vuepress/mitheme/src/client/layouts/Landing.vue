<template>
<div id="root" :class="{ ['sidebar-open']: isSidebarOpen }">
	<div class="bg">
		<div v-parallax="1.2" class="object1"><img src="/top-bg-object1.svg" aria-hidden="true"></div>
		<div v-parallax="1.2" class="object2"><img src="/top-bg-object2.svg" aria-hidden="true"></div>
		<div v-parallax="1.2" class="object3"><img src="/top-bg-object2.svg" aria-hidden="true"></div>
	</div>

	<Navbar @toggle-sidebar="toggleSidebar"/>

    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <Sidebar>
      	<template #bottom>
			<MkDots :class="$style.sidebarDots" :space="12"/>
        	<MkAd :class="$style.koko9" class="mkAd"/>
      	</template>
    </Sidebar>

	<div class="top">
		<ClientOnly>
			<transition name="fade">
				<MkParticles v-if="particleEnabled" :height="'800px'"/>
			</transition>
		</ClientOnly>

		<div class="container">
			<svg class="logo" viewBox="0 0 515 136" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
					<g id="path2" transform="matrix(0.264585,0,0,0.264585,-50.0005,-50.0001)">
							<path d="M256.418,188.976C248.558,188.944 240.758,190.308 233.379,193.013C220.308,197.613 209.533,205.888 201.091,217.802C193.02,229.329 188.977,242.195 188.977,256.409L188.977,508.89C188.977,527.332 195.52,543.29 208.576,556.732C222.032,569.803 237.99,576.331 256.418,576.331C275.259,576.331 291.204,569.803 304.274,556.747C317.73,543.291 324.441,527.332 324.441,508.89L324.441,462.983C324.584,453.04 334.824,455.655 340.01,462.983C349.695,479.767 370.251,494.19 394.193,494.105L394.193,494.119C418.119,494.019 438.005,482.196 448.375,462.983C452.304,458.354 463.377,450.455 464.52,462.983L464.52,508.89C464.52,527.332 471.047,543.29 484.104,556.732C497.574,569.803 513.511,576.331 531.953,576.331C550.78,576.331 566.739,569.803 579.809,556.747C593.265,543.291 599.977,527.332 599.977,508.89L599.977,256.409C599.977,242.195 595.752,229.329 587.309,217.802C579.224,205.874 568.653,197.613 555.597,193.013C547.912,190.314 540.228,188.976 532.543,188.976C511.788,188.976 494.301,197.046 480.073,213.188L411.636,293.281C410.107,294.438 405.006,303.247 394.178,303.247C383.379,303.247 378.868,294.439 377.325,293.296L308.297,213.188C294.47,197.046 277.173,188.976 256.418,188.976ZM682.904,188.983C666.763,188.983 652.926,194.748 641.404,206.271C630.261,217.413 624.691,231.054 624.691,247.196C624.691,263.338 630.261,277.174 641.404,288.697C652.926,299.839 666.763,305.41 682.904,305.41C699.046,305.41 712.88,299.839 724.412,288.697C735.935,277.174 741.693,263.338 741.693,247.196C741.693,231.054 735.935,217.413 724.412,206.271C712.88,194.748 699.046,188.983 682.904,188.983ZM1327.58,193.013C1311.45,193.013 1297.62,198.779 1286.1,210.302C1274.96,221.444 1269.38,235.08 1269.38,251.212L1269.38,519.72C1269.38,535.861 1274.96,549.697 1286.1,561.22C1297.62,572.362 1311.45,577.933 1327.58,577.933C1343.73,577.933 1357.55,572.362 1369.08,561.22C1380.6,549.697 1386.37,535.867 1386.37,519.734C1386.37,508.211 1387.9,502.453 1390.96,502.453C1392.51,502.453 1394.05,503.023 1395.58,504.166L1453.2,560.061C1464.72,571.203 1478.36,576.774 1494.11,576.774C1510.62,576.774 1524.45,571.009 1535.6,559.486C1546.74,547.572 1552.31,533.936 1552.31,518.575C1552.31,502.053 1546.36,488.029 1534.45,476.506C1508.32,450.765 1494.69,437.517 1493.54,436.755C1488.54,431.755 1488.73,427.53 1494.11,424.073L1495.27,423.497L1495.27,422.929L1531.57,399.875C1548.85,388.352 1557.5,372.026 1557.5,350.904C1557.5,339.381 1554.42,328.622 1548.28,318.623C1536.76,301.339 1520.43,292.691 1499.3,292.691C1487.78,292.691 1477.02,295.768 1467.04,301.911C1422.48,331.499 1399.42,346.678 1397.88,347.449C1395.2,349.363 1392.7,349.738 1390.4,348.586C1387.7,347.434 1386.35,344.939 1386.35,341.101L1386.35,251.212C1386.35,235.08 1380.59,221.444 1369.07,210.302C1357.55,198.779 1343.72,193.013 1327.58,193.013ZM1716.37,291.738C1676.42,291.738 1642.24,305.949 1613.81,334.376C1585.76,362.422 1571.74,396.227 1571.74,435.795C1571.74,475.745 1585.76,509.932 1613.81,538.359C1642.24,566.404 1676.42,580.428 1716.37,580.428C1755.94,580.428 1789.94,566.404 1818.37,538.359C1827.2,529.521 1831.62,518.773 1831.62,506.107C1831.62,493.423 1827.2,482.664 1818.37,473.827C1809.53,464.999 1798.77,460.584 1786.11,460.584C1773.42,460.584 1762.66,464.999 1753.83,473.827C1743.46,484.588 1730.97,489.963 1716.37,489.963C1701.4,489.963 1688.53,484.78 1677.77,474.41C1667.39,463.649 1662.2,450.775 1662.2,435.795C1662.2,421.206 1667.59,408.72 1678.35,398.34C1683.73,392.578 1690.26,388.74 1697.93,386.817C1699.87,386.436 1701.4,386.623 1702.55,387.385C1703.32,388.547 1702.93,389.702 1701.39,390.854L1689.87,402.953C1681.03,411.791 1676.61,422.359 1676.61,434.644C1676.61,447.319 1680.45,457.497 1688.13,465.182C1695.81,472.868 1706.57,476.705 1720.41,476.705C1730.01,476.705 1739.61,471.91 1749.21,462.311L1816.06,396.044C1824.9,387.197 1829.32,376.436 1829.32,363.77C1829.32,351.086 1824.9,340.332 1816.06,331.504C1789.17,304.992 1755.94,291.738 1716.37,291.738ZM877.977,292.668C841.947,292.194 813.839,301.679 793.662,321.133C775.996,338.036 767.168,359.358 767.168,385.089C767.549,417.363 780.035,441.565 804.624,457.697C811.918,462.687 820.941,466.72 831.693,469.796C837.083,471.72 846.111,474.02 858.777,476.705C869.919,479.391 882.023,481.886 895.088,484.191C897.774,484.962 898.924,486.312 898.543,488.236C898.543,490.541 897.58,491.691 895.657,491.691C890.667,492.072 886.059,492.266 881.831,492.266C850.328,488.81 829.001,485.927 817.859,483.622C814.793,482.851 811.535,482.463 808.078,482.463C796.165,482.463 785.787,486.884 776.949,495.721C768.502,504.178 764.282,514.551 764.282,526.836C764.282,536.825 767.352,545.854 773.494,553.92C780.027,561.986 788.486,567.169 798.866,569.473C831.13,576.778 860.317,580.428 886.429,580.428C922.16,580.428 950.013,570.825 969.992,551.617C987.277,535.094 995.925,513.775 995.925,487.653C995.925,455.388 983.626,431.187 959.037,415.045C945.972,406.598 927.915,400.45 904.869,396.612C891.042,393.927 879.518,391.427 870.3,389.112L870.3,389.127C867.605,388.356 866.067,386.818 865.686,384.513C865.686,382.59 867.224,381.44 870.3,381.059C873.757,380.678 877.415,380.678 881.262,381.059C913.146,384.135 934.652,386.823 945.794,389.127C948.861,389.889 951.931,390.271 955.007,390.271C967.301,390.271 977.674,386.051 986.121,377.604C994.959,368.767 999.379,358.393 999.379,346.49C999.379,336.109 996.109,326.894 989.576,318.837C983.043,310.761 974.79,305.566 964.81,303.261C938.298,297.5 911.788,294.042 885.285,292.89C882.813,292.77 880.379,292.7 877.977,292.668ZM1128.73,292.668C1092.7,292.194 1064.59,301.679 1044.42,321.133C1026.75,338.036 1017.92,359.358 1017.92,385.089C1018.3,417.363 1030.79,441.565 1055.38,457.697C1062.67,462.687 1071.7,466.72 1082.46,469.796C1087.84,471.72 1096.86,474.02 1109.54,476.705C1120.68,479.391 1132.79,481.886 1145.84,484.191C1148.53,484.962 1149.68,486.312 1149.3,488.236C1149.3,490.541 1148.34,491.691 1146.41,491.691C1141.42,492.072 1136.81,492.266 1132.59,492.266C1101.09,488.81 1079.77,485.927 1068.63,483.622C1065.55,482.851 1062.29,482.463 1058.83,482.463C1046.92,482.463 1036.55,486.884 1027.72,495.721C1019.26,504.178 1015.04,514.551 1015.04,526.836C1015.04,536.825 1018.11,545.854 1024.26,553.92C1030.79,561.986 1039.24,567.169 1049.62,569.473C1081.88,576.778 1111.08,580.428 1137.2,580.428C1172.92,580.428 1200.77,570.825 1220.75,551.617C1238.03,535.094 1246.68,513.775 1246.68,487.653C1246.68,455.388 1234.39,431.187 1209.81,415.045C1196.74,406.598 1178.68,400.45 1155.64,396.612C1141.81,393.927 1130.29,391.427 1121.07,389.112L1121.05,389.127C1118.37,388.356 1116.84,386.818 1116.45,384.513C1116.45,382.59 1117.99,381.44 1121.05,381.059C1124.52,380.678 1128.17,380.678 1132.01,381.059C1163.89,384.135 1185.41,386.823 1196.55,389.127C1199.62,389.889 1202.69,390.271 1205.76,390.271C1218.06,390.271 1228.43,386.051 1236.89,377.604C1245.72,368.767 1250.13,358.393 1250.13,346.49C1250.13,336.109 1246.87,326.894 1240.35,318.837C1233.81,310.761 1225.55,305.566 1215.56,303.261C1189.06,297.5 1162.55,294.042 1136.04,292.89C1133.57,292.77 1131.13,292.7 1128.73,292.668ZM1910.17,296.736C1894.04,296.736 1880.21,302.501 1868.69,314.024C1857.55,325.157 1851.98,338.793 1851.98,354.934L1851.98,435.028C1851.98,473.825 1865.8,507.05 1893.45,534.705C1921.12,562.36 1954.36,576.191 1993.15,576.191C2000.84,576.191 2007.95,575.614 2014.48,574.471C2018.32,573.699 2021,574.469 2022.53,576.774C2023.69,578.307 2023.3,580.42 2021.39,583.115C2016.39,590.029 2005.82,593.486 1989.69,593.486C1983.55,593.486 1975.68,591.949 1966.07,588.873C1956.47,585.797 1948.98,584.259 1943.6,584.259C1920.93,584.259 1904.99,594.638 1895.77,615.388C1892.32,622.302 1890.58,629.598 1890.58,637.283C1890.58,659.948 1900.77,675.892 1921.13,685.11C1941.49,694.709 1964.34,699.505 1989.69,699.505C2033.49,699.505 2068.25,686.639 2093.98,660.898C2120.11,635.166 2133.18,600.784 2133.18,557.758L2133.18,452.308C2133.94,446.157 2134.32,440.399 2134.32,435.028L2134.32,354.934C2134.32,338.802 2128.57,325.166 2117.04,314.024C2105.9,302.501 2092.27,296.736 2076.13,296.736C2059.99,296.736 2046.16,302.501 2034.63,314.024C2023.11,325.157 2017.35,338.793 2017.35,354.934L2017.35,435.028C2017.35,441.551 2015.04,447.309 2010.43,452.308C2005.83,456.918 2000.07,459.225 1993.15,459.225C1986.62,459.225 1980.86,456.918 1975.87,452.308C1971.26,447.309 1968.95,441.551 1968.95,435.028L1968.95,354.934C1968.95,338.802 1963.19,325.166 1951.67,314.024C1940.14,302.501 1926.3,296.736 1910.17,296.736ZM683.473,316.947C667.331,316.947 653.495,322.713 641.972,334.236C630.449,345.768 624.691,359.602 624.691,375.744L624.691,518.118C624.691,534.259 630.449,548.095 641.972,559.618C653.504,570.761 667.341,576.331 683.473,576.331C699.624,576.331 713.27,570.761 724.412,559.618C735.935,548.095 741.693,534.259 741.693,518.118L741.693,375.744C741.693,359.593 735.935,345.759 724.412,334.236C713.261,322.713 699.614,316.947 683.473,316.947Z" style="fill:currentColor;fill-rule:nonzero;"/>
					</g>
			</svg>
			<div class="tagline" id="tagline">
				<div class="row">Interplanetary</div>
				<div class="row">microblogging</div>
				<div class="row">platform.🚀</div>
			</div>
			<div class="description">{{ frontmatter.description }}</div>
			<div class="buttons">
				<a class="start" href="#gettingStarted">{{ frontmatter.gettingStarted }}</a>
				<a class="more" href="#learnMore">{{ frontmatter.learnMore }}</a>
			</div>
		</div>
		<!--<img src="/top-corner-1.svg" class="corner1">-->
		<!--<img src="/top-corner-2.svg" class="corner2">-->
		<MkDots v-parallax="1.4" class="dots1" :space="30"/>
		<MkDots v-parallax="1.5" class="dots2" :space="30"/>
		<img v-parallax="2" src="/screenshot-desktop.png" class="screenshot desktop" alt="screenshot of Misskey in a PC browser">
		<img v-parallax="3" src="/screenshot-mobile.png" class="screenshot mobile" alt="screenshot of Misskey in a mobile browser">
		<img v-parallax="4" src="/ai.png" class="ai" alt="Ai-chan, Misskey's mascott">
		<a href="https://github.com/misskey-dev/misskey" target="_blank" class="github-corner" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="position: fixed; z-index: 10; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>
	</div>

	<div class="key-features">
		<div class="container">
			<div class="item">
				<div class="icon"><img src="/emojis/four-leaf-clover_1f340.png" aria-hidden="true"></div>
				<div class="title">{{ frontmatter.keyFeatures.open.title }}</div>
				<div class="description">{{ frontmatter.keyFeatures.open.description }}</div>
			</div>
			<div class="item">
				<div class="icon"><img src="/emojis/ringed-planet_1fa90.png" aria-hidden="true"></div>
				<div class="title">{{ frontmatter.keyFeatures.federated.title }}</div>
				<div class="description">{{ frontmatter.keyFeatures.federated.description }}</div>
			</div>
			<div class="item">
				<div class="icon"><img src="/emojis/package_1f4e6.png" aria-hidden="true"></div>
				<div class="title">{{ frontmatter.keyFeatures.multifunction.title }}</div>
				<div class="description">{{ frontmatter.keyFeatures.multifunction.description }}</div>
			</div>
			<div class="item">
				<div class="icon"><img src="/emojis/gear_2699-fe0f.png" aria-hidden="true"></div>
				<div class="title">{{ frontmatter.keyFeatures.customizable.title }}</div>
				<div class="description">{{ frontmatter.keyFeatures.customizable.description }}</div>
			</div>
		</div>
	</div>

	<div class="body">
		<div class="about" id="learnMore">
			<div class="container">
				<div class="title" v-html="frontmatter.sections.federatedSoftware.title"></div>
				<div class="description" v-html="frontmatter.sections.federatedSoftware.description"></div>
			</div>
		</div>

		<MkDots class="dots" :space="30"/>

		<div class="features">
			<div class="container">
				<div class="h">
					<div class="container">
						<div class="title">{{ frontmatter.sections.features.title }}</div>
						<div class="text">{{ frontmatter.sections.features.description }}</div>
					</div>
				</div>
				<div class="list">
					<div class="column">
						<div v-fade-in class="item"><div class="content">
							<img src="/top-features-note.png" class="img" alt="some notes">
							<div class="title">{{ frontmatter.sections.features.list.note.title }}</div>
							<div class="description">{{ frontmatter.sections.features.list.note.description }}</div>
						</div></div>
						<div v-fade-in class="item"><div class="content">
							<img src="/top-features-reaction.png" class="img" alt="some emojis in the reaction picker">
							<div class="title">{{ frontmatter.sections.features.list.reaction.title }}</div>
							<div class="description">{{ frontmatter.sections.features.list.reaction.description }}</div>
						</div></div>
						<div v-fade-in class="item"><div class="content">
							<img src="/top-features-theme.png" class="img" alt="color palette">
							<div class="title">{{ frontmatter.sections.features.list.theme.title }}</div>
							<div class="description">{{ frontmatter.sections.features.list.theme.description }}</div>
						</div></div>
						<div v-fade-in class="item"><div class="content">
							<img src="/top-features-charts.png" class="img" alt="Charts">
							<div class="title">{{ frontmatter.sections.features.list.charts.title }}</div>
							<div class="description">{{ frontmatter.sections.features.list.charts.description }}</div>
						</div></div>
					</div>
					<div class="column">
						<div v-fade-in class="item"><div class="content">
							<img src="/top-features-federation.png" class="img" alt="logos of Misskey and other ActivityPub server software">
							<div class="title">{{ frontmatter.sections.features.list.federation.title }}</div>
							<div class="description">{{ frontmatter.sections.features.list.federation.description }}</div>
						</div></div>
						<div v-fade-in class="item"><div class="content">
							<img src="/top-features-drive.png" class="img" alt="a list of files in Misskey Drive">
							<div class="title">{{ frontmatter.sections.features.list.drive.title }}</div>
							<div class="description">{{ frontmatter.sections.features.list.drive.description }}</div>
						</div></div>
						<div v-fade-in class="item"><div class="content">
							<img src="/top-features-thread.png" class="img" alt="multiple messages arranged in a thread">
							<div class="title">{{ frontmatter.sections.features.list.thread.title }}</div>
							<div class="description">{{ frontmatter.sections.features.list.thread.description }}</div>
						</div></div>
						<div v-fade-in class="item"><div class="content">
							<img src="/top-features-widgets.png" class="img" alt="sample widget showing activity as colored dots">
							<div class="title">{{ frontmatter.sections.features.list.widgets.title }}</div>
							<div class="description">{{ frontmatter.sections.features.list.widgets.description }}</div>
						</div></div>
					</div>
				</div>
			</div>
		</div>

		<MkDots class="dots" :space="30"/>

		<div class="start" id="gettingStarted">
			<div class="title">{{ frontmatter.sections.gettingStarted.title }}</div>
			<div class="container">
				<div v-fade-in class="find">
					<div class="container">
						<div class="icon"><img src="/emojis/ringed-planet_1fa90.png" aria-hidden="true"></div>
						<div class="title">{{ frontmatter.sections.gettingStarted.find.title }}</div>
						<div class="description"></div>
						<RouterLink class="link" to="./instances.html">{{ frontmatter.sections.gettingStarted.find.list }}</RouterLink>
					</div>
				</div>
				<div v-fade-in class="create">
					<div class="container">
						<div class="icon"><img src="/emojis/package_1f4e6.png" aria-hidden="true"></div>
						<div class="title">{{ frontmatter.sections.gettingStarted.create.title }}</div>
						<div class="description"></div>
						<RouterLink class="link" to="./docs/install.html">{{ frontmatter.sections.gettingStarted.create.guide }}</RouterLink>
					</div>
				</div>
				<div v-fade-in class="docs">
					<div class="container">
						<div class="icon"><img src="/emojis/light-bulb_1f4a1.png" aria-hidden="true"></div>
						<div class="title">{{ frontmatter.sections.gettingStarted.docs.title }}</div>
						<div class="description"></div>
						<RouterLink class="link" to="./docs/misskey.html">{{ frontmatter.sections.gettingStarted.docs.docs }}</RouterLink>
					</div>
				</div>
			</div>
		</div>

		<MkDots class="dots" :space="30"/>

		<div class="donation">
			<div class="container">
				<div class="title">{{ frontmatter.sections.donation.title }}</div>
				<div class="description">{{ frontmatter.sections.donation.description }}</div>
				<RouterLink class="link" to="./docs/donate.html">{{ frontmatter.learnMore }}</RouterLink>
			</div>
		</div>

		<div class="supporters">
			<div class="container">
				<div class="title">{{ frontmatter.sections.sponsors.title }}</div>
				<a style="display: block;" class="masknetwork" title="MaskNetwork" href="https://mask.io/" target="_blank"><img src="/sponsors/masknetwork.png" alt="MaskNetwork" style="width: 180px;"></a>
				<a style="display: block;" class="rss3" title="RSS3" href="https://rss3.io/" target="_blank"><img src="/sponsors/rss3.svg" alt="RSS3" style="width: 130px;"></a>
				<a style="display: block;" class="skeb" title="Skeb" href="https://skeb.jp/" target="_blank"><img src="/sponsors/skeb.svg" alt="Skeb" style="width: 180px;"></a>
				<a style="display: block;" class="dcadvirth" title="DC Advirth" href="https://www.dotchain.ltd/advirth" target="_blank"><img src="/sponsors/dcadvirth.png" alt="DC Advirth" style="width: 100px;"></a>
			</div>
		</div>
	</div>

	<div class="footer">
		<div class="container">
			<div class="c">&copy; 2023 Misskey, syuilo, and other contributors</div>
		</div>
	</div>
</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import {
  ClientOnly,
  usePageFrontmatter,
} from '@vuepress/client';
import Navbar from '@theme/Navbar.vue'
import Sidebar from '@theme/Sidebar.vue'

const frontmatter = usePageFrontmatter();

const vParallax = {
	mounted: (src, binding, vn) => {
		src.style.willChange = 'transform';

		window.addEventListener('scroll', () => {
			src.style.transform = `translateY(${window.scrollY / binding.value}px)`;
		}, { passive: true });
	}
}

const vFadeIn = {
	mounted: (src, binding, vn) => {
		src.classList.add('__v_fadeIn_out');
		src.children[0].style.transition = `all 0.5s ease`;

		function onIntersect(entries) {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('__v_fadeIn_in');
				} else {
					entry.target.classList.remove('__v_fadeIn_in');
				}
			}
		}

		const observer = new IntersectionObserver(onIntersect, {
			root: null,
			rootMargin: '9999px 0px -300px 0px',
			threshold: 0,
		});

		observer.observe(src);
	}
}

let particleEnabled = ref(true);
const isSidebarOpen = ref(false);
const toggleSidebar = (to?: boolean): void => {
  isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value;
}

onMounted(() => {
	const lang = navigator.language.toLowerCase();
	if (location.pathname === '/' && lang.startsWith('it')) {
		location.href  = '/it/';
	} else {
		if (location.pathname === '/' && !lang.startsWith('ja')) {
			location.href = '/en/';
		}
	}

	window.setTimeout(() => {
		const tagline = document.getElementById('tagline');
		for (let i = 0; i < tagline.children.length; i++) {
			const row = tagline.children[i];
			window.setTimeout(() => { row.classList.add('shown'); }, 200 * i);
		}
	}, 500);

	window.addEventListener('scroll', () => {
		particleEnabled.value = false;
	}, {
		passive: true,
		once: true,
	});
});
</script>

<style lang="scss">
.github-corner { color: var(--c-brand); }
.github-corner > svg { fill: #fff; }
.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}

.__v_fadeIn_out {
	> * {
		opacity: 0;
		transform: scale(0.9) translateY(-50px);
	}
}

.__v_fadeIn_in {
	> * {
		opacity: 1;
		transform: scale(1) translateY(0);
	}
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes spin {
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
}

b[data-marker] {
	background: linear-gradient(transparent 70%, #bfff0080 0%);
}

html {
	scroll-behavior: smooth;
}

#root {
	position: relative;
	line-height: 1.5;
	background: #f9f9f9;

	> .bg {
		position: absolute;
    top: 0;
		left: 0;
		width: 100%;
    height: 100%;
		overflow: hidden;

		> .object1 {
			position: absolute;
			right: -300px;
			top: -400px;
			width: 1000px;
			pointer-events: none;
			user-select: none;

			> img {
				display: block;
				width: 100%;
				animation: 60s linear 0s infinite normal none running spin;
			}
		}

		> .object2 {
			position: absolute;
			left: -250px;
			top: 500px;
			width: 1000px;
			pointer-events: none;
			user-select: none;

			> img {
				display: block;
				width: 100%;
				animation: 80s linear 0s infinite reverse none running spin;
			}
		}

		> .object3 {
			position: absolute;
			right: -300px;
			top: 1400px;
			width: 1000px;
			pointer-events: none;
			user-select: none;

			> img {
				display: block;
				width: 100%;
				animation: 80s linear 0s infinite normal none running spin;
			}
		}
	}

	> .top {
		position: relative;
		height: 1200px;

		> .container {
			position: relative;
			z-index: 1;
			max-width: 1500px;
			margin: 0 auto;
			padding: 150px 100px;

			> .logo {
				width: 250px;
				margin-bottom: 16px;
			}

			> .tagline {
				font-family: "M PLUS Rounded 1c", Roboto, HelveticaNeue, Arial, sans-serif;
				font-size: 4em;
				font-weight: bold;
				margin-bottom: 40px;

				> .row {
					opacity: 0;
					transform: translateX(100px);
					transition: all 1s cubic-bezier(0,.5,.5,1);

					&.shown {
						opacity: 1;
						transform: translateX(0px);
					}
				}
			}

			> .description {
				display: inline-block;
				font-size: 1.2em;
				font-weight: bold;
				opacity: 0.7;
				max-width: 500px;
				margin: 0 0 20px 0;
			}

			> .buttons {
				> * {
					cursor: pointer;
				}

				> .start {
					display: inline-block;
					padding: 12px 26px;
					background: linear-gradient(90deg, #00b332, #aacb00);
					border-radius: 999px;
					color: #fff;
					font-size: 1.1em;
					font-weight: bold;
					margin-right: 20px;
					box-shadow: 0 8px 20px -5px #86b30088;
				}

				> .more {
					display: inline-block;
					padding: 12px 26px;
					background: #fff;
					border-radius: 999px;
					color: var(--c-brand);
					font-size: 1.1em;
					font-weight: bold;
					box-shadow: 0 8px 20px -5px rgba(0, 0, 0, 0.1);
				}
			}

			@media (max-width: 1600px) {
				padding: 100px 100px;
			}

			@media (max-width: 1250px) {
				text-align: center;
			}

			@media (max-width: 800px) {
				padding: 100px 50px;
			}

			@media (max-width: 700px) {
				> .tagline {
					font-size: 3em;
				}
			}

			@media (max-width: 500px) {
				padding: 80px 50px;

				> .tagline {
					font-size: 2.5em;
				}
			}
		}

		> .dots1 {
			position: absolute;
			right: 900px;
			top: 200px;
			width: 300px;
			height: 300px;
			color: var(--c-brand);
			pointer-events: none;
			user-select: none;
		}

		> .dots2 {
			position: absolute;
			right: 120px;
			top: 500px;
			width: 300px;
			height: 300px;
			color: var(--c-brand);
			pointer-events: none;
			user-select: none;
		}

		> .screenshot.desktop {
			position: absolute;
			right: 300px;
			top: 128px;
			width: 800px;
			border-radius: 10px;
			box-shadow: 2px 2px 32px rgba(0, 0, 0, 0.1);
			pointer-events: none;
			user-select: none;
		}

		> .screenshot.mobile {
			position: absolute;
			right: 650px;
			top: 400px;
			height: 400px;
			border-radius: 10px;
			box-shadow: 2px 2px 32px rgba(0, 0, 0, 0.1);
			pointer-events: none;
			user-select: none;
		}

		> .ai {
			position: absolute;
			right: 130px;
			top: 128px;
			height: 900px;
		}

		@media (max-width: 1800px) {
			> .dots1 {
				right: 800px;
			}

			> .screenshot.desktop {
				width: 700px;
			}
		}

		@media (max-width: 1700px) {
			> .dots1 {
				right: 700px;
			}

			> .screenshot.desktop {
				width: 600px;
			}

			> .screenshot.mobile {
				height: 350px;
				right: 500px;
			}
		}

		@media (max-width: 1600px) {
			> .dots1 {
				right: 600px;
			}
		
			> .screenshot.desktop {
				width: 500px;
			}

			> .screenshot.mobile {
				height: 300px;
			}
		}

		@media (max-width: 1500px) {
			> .dots1 {
				right: 600px;
			}
		
			> .screenshot.desktop {
				right: 250px;
			}

			> .screenshot.mobile {
				right: 450px;
			}
		}

		@media (max-width: 1250px) {
			> .dots1 {
				display: none;
			}

			> .dots2 {
				display: none;
			}
		
			> .screenshot.desktop {
				display: none;
			}

			> .screenshot.mobile {
				display: none;
			}

			> .ai {
				display: none;
			}
		}
	}

	> .key-features {
		position: relative;
		z-index: 1;
		background: #f9f9f980;
		-webkit-backdrop-filter: blur(30px);
		backdrop-filter: blur(30px);
		margin: -400px auto 0 auto;
		padding: 50px 0 50px 0;
		max-width: min(1300px, calc(100% - 100px));
		border-radius: 30px;

		@media (max-width: 500px) {
			max-width: calc(100% - 50px);
		}

		> .container {
			position: relative;
			max-width: 1200px;
			margin: 0 auto;
			padding: 30px 50px;
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
			gap: 50px;

			@media (max-width: 700px) {
				grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
				font-size: 95%;
			}

			> .item {
				text-align: center;

				> .icon {
					> i {
						font-size: 3em;
						color: var(--c-brand);
					}

					> img {
						width: 70px;
						vertical-align: bottom;
					}
				}

				> .title {
					font-size: 1.5em;
					font-weight: bold;
					margin: 15px 0 10px 0;
				}
			}
		}
	}

	> .body {
		position: relative;
		z-index: 1;

		> .dots {
			display: block;
			width: 1200px;
			max-width: calc(100% - 200px);
			height: 100px;
			margin: 50px auto;
			color: var(--c-brand);
		}

		> .about {
			margin: 50px 0 0 0;

			> .container {
				position: relative;
				max-width: min(1200px, calc(100% - 100px));
				margin: 0 auto 50px auto;
				padding: 100px 100px;
				box-sizing: border-box;
				text-align: center;
				border-radius: 30px;
				background: var(--panel, #fff);

				> .title {
					font-size: 2em;
					font-weight: bold;
					margin-bottom: 20px;
				}

				> .description {
					font-size: 1.2em;
				}

				@media (max-width: 800px) {
					padding: 50px 50px;
				}

				@media (max-width: 500px) {
					max-width: calc(100% - 50px);
				}
			}
		}

		> .features {
			margin: 100px 0;

			> .container {
				position: relative;
				max-width: 1300px;
				margin: 0 auto;
				padding: 0 100px;
				display: flex;
				gap: 50px;

				> .h {
					width: 300px;

					> .container {
						position: sticky;
						top: calc(50px + var(--globalHeaderHeight, 0px));

						> .title {
							font-size: 2.5em;
							font-weight: bold;
						}

						> .text {
							margin-top: 10px;
							font-size: 1.3em;
							opacity: 0.9;
						}
					}
				}

				> .list {
					flex: 1;
					display: flex;
					gap: 50px;

					> .column {
						width: 50%;

						&:last-child {
							padding-top: 100px;
						}

						> .item {
							&:not(:last-child) {
								margin-bottom: 60px;
							}

							> .content {
								padding: 40px;
								background: var(--panel, #fff);
								border-radius: 20px;

								> .img {
									width: 100%;
									aspect-ratio: 2/1;
									object-fit: cover;
									border-radius: 10px;
								}

								> .title {
									font-size: 1.5em;
									font-weight: bold;
									margin: 15px 0 8px 0;
								}

								> .description {
									font-size: 1.1em;
									opacity: 0.9;
								}
							}
						}
					}
				}

				@media (max-width: 1250px) {
					display: block;

					> .h {
						width: 100%;
						text-align: center;
						margin-bottom: 80px;
					}
				}

				@media (max-width: 800px) {
					> .list {
						display: block;

						> .column {
							width: 100%;
						}
					}
				}

				@media (max-width: 500px) {
					padding: 100px 50px;
				}
			}
		}

		> .start {
			padding: 0 50px 50px 50px;

			> .title {
				font-size: 2em;
				font-weight: bold;
				margin: 100px 0 50px 0;
				text-align: center;
			}

			> .container {
				display: flex;
				gap: 50px;
				max-width: 1200px;
				margin: 0 auto;

				> * {
					> .container {
						position: relative;
						max-width: 900px;
						margin: 0 auto;
						padding: 50px 50px;
						text-align: center;
						border-radius: 30px;

						> .icon {
							margin-bottom: 20px;

							> i {
								font-size: 3em;
								color: #fff;
							}

							> img {
								width: 50px;
								vertical-align: bottom;
							}
						}

						> .title {
							font-size: 1.3em;
							font-weight: bold;
							margin-bottom: 20px;
						}

						> .link {
							display: inline-block;
							font-size: 1.1em;
							font-weight: bold;
							padding: 12px 24px;
							background: #eee;
							border-radius: 10px;
							color: var(--c-brand);
						}
					}
				}

				> .find {
					flex: 1;

					> .container {
						background: var(--c-brand);
						color: #fff;
					}
				}

				> .create {
					flex: 1;

					> .container {
						background: var(--panel, #fff);
					}
				}

				> .docs {
					flex: 1;

					> .container {
						background: var(--panel, #fff);
					}
				}

				@media (max-width: 1250px) {
					display: block;

					> *:not(:last-child) {
						margin-bottom: 30px;
					}
				}
			}
		}

		> .donation {
			padding-top: 100px;

			> .container {
				position: relative;
				max-width: min(1000px, calc(100% - 100px));
				box-sizing: border-box;
				margin: 0 auto;
				padding: 100px 100px;
				border-radius: 30px;
				background: var(--panel, #fff);
				text-align: center;

				//background-image: linear-gradient(-45deg, transparent 25%, #f5f5f5 0, #f5f5f5 50%, transparent 0, transparent 75%, #f5f5f5 0, #f5f5f5);
				//background-image: linear-gradient(-45deg, transparent 25%, #fafafa 0, #fafafa 50%, transparent 0, transparent 75%, #fafafa 0, #fafafa);
				//background-size: 30px 30px;

				> .title {
					font-size: 2em;
					font-weight: bold;
					margin-bottom: 20px;
				}

				> .description {
					font-size: 1.2em;
				}

				> .link {
					display: inline-block;
					margin-top: 20px;
					padding: 12px 26px;
					background: linear-gradient(90deg, #00b332, #aacb00);
					border-radius: 999px;
					color: #fff;
					font-size: 1.1em;
					font-weight: bold;
					box-shadow: 0 8px 20px -5px #86b30088;
				}

				@media (max-width: 800px) {
					padding: 50px 50px;
				}

				@media (max-width: 500px) {
					max-width: calc(100% - 50px);
				}
			}
		}

		> .supporters {
			padding: 50px;
			text-align: center;

			> .container {
				> .title {
					font-size: 1.5em;
					font-weight: bold;
					margin-bottom: 20px;
				}

				> a {
					margin-top: 24px;
				}
			}
		}
	}

	> .footer {
		position: relative;
		z-index: 1;
		padding: 50px;
		text-align: center;
	}

	.sidebar {
		font-size: 16px;
		width: var(--sidebar-width);
		position: fixed;
		z-index: 10;
		margin: 0;
		top: var(--globalHeaderHeight);
		left: 0;
		bottom: 0;
		box-sizing: border-box;
		overflow-y: auto;
		scrollbar-width: thin;
		scrollbar-color: var(--c-brand) var(--c-border);
		background-color: var(--c-bg-sidebar);
		transition: transform var(--t-transform), background-color var(--t-color),
			border-color var(--t-color);

		padding-top: var(--globalHeaderHeight);
		transform: translateX(-100%);

		&::-webkit-scrollbar {
			width: 7px;
		}
		&::-webkit-scrollbar-track {
			background-color: var(--c-border);
		}
		&::-webkit-scrollbar-thumb {
			background-color: var(--c-brand);
		}
	}

	.sidebar-mask {
		position: fixed;
		z-index: 9;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: none;
	}

	&.sidebar-open {
		.sidebar-mask {
			display: block;
		}

		.sidebar {
			transform: translateX(0);
		}

		.navbar > .toggle-sidebar-button .icon {
			span {
				&:nth-child(1) {
					transform: rotate(45deg) translate3d(5.5px, 5.5px, 0);
				}

				&:nth-child(2) {
					transform: scale3d(0, 1, 1);
				}

				&:nth-child(3) {
					transform: rotate(-45deg) translate3d(6px, -6px, 0);
				}

				&:nth-child(1),
				&:nth-child(3) {
					transform-origin: center;
				}
			}
		}
	}
}

@font-face {
	font-family: 'GoyangIlsan';
	src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GoyangIlsan.woff') format('woff');
	font-weight: normal;
	font-style: normal;
}

#root:lang(ko-KR) {
	

	font-family: "M PLUS Rounded 1c", Roboto, HelveticaNeue, 'GoyangIlsan', Arial, sans-serif;

}

html.dark #root {
	background: #1a1a1a;
	color: #dfddcc;

	--panel: #222;

	> .key-features {
		background: #2a2a2a80;
	}
}
</style>

<style lang="scss" module>
.sidebarDots {
	display: block;
	margin: 0 32px 2em 32px;
	width: calc(100% - 64px);
	height: 40px;
	opacity: 0.2;
}

.koko9 {
	display: block;
	margin: 0 32px 32px 32px;

	> img {
		display: block;
		width: 100%;
	}
}

.live2d {
	position: fixed;
	bottom: 0;
	right: 0;
	width: 300px;
	height: 600px;
	border: none;
	pointer-events: none;
}
</style>
