<template>
  <div>
    <h1>Plugins</h1>
    <br />
    <div id="app">
      <div class="plugin-list">
        <div
          v-for="plugin in plugins"
          :key="plugin.name"
          class="plugin-card"
          @click="openRepo(plugin.repoUrl)"
        >
          <img class="plugin-icon" :src="plugin.icon" alt="Plugin Icon" />
          <div class="plugin-info">
            <div class="plugin-title-author">
              <div class="plugin-title">
                {{ truncateText(plugin.name, 24) }}
                <span class="official-badge">
                  <span
                    class="material-symbols-outlined"
                    style="font-size: 18px"
                  >
                    verified
                  </span>
                </span>
                <Tooltip v-if="isOfficial(plugin)" content="Trusted Publisher">
                </Tooltip>
              </div>
              <div class="plugin-author">by {{ plugin.author }}</div>
            </div>
            <div class="plugin-description">
              {{ formatDescription(plugin.description) }}
            </div>
            <div class="plugin-stats">
              <span class="plugin-stars" title="Repository Stars">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  class="plugin-star-icon"
                >
                  <path
                    fill="#909090"
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                  />
                </svg>
                {{ plugin.stars }}
              </span>
              <span class="plugin-updated" title="Last Updated">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="plugin-updated-icon"
                >
                  <path
                    fill="#909090"
                    d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                  />
                </svg>
                {{ formatRelativeTime(plugin.updated) }}
              </span>
              <span class="plugin-version" title="Plugin Version">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  class="plugin-version-icon"
                >
                  <path
                    fill="#909090"
                    d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                  />
                </svg>
                {{ plugin.version }}
              </span>
              <span class="plugin-api_version" title="API Version">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  class="plugin-api_version-icon"
                >
                  <path
                    fill="#909090"
                    d="M0 80L0 229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7L48 32C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                  />
                </svg>
                {{ plugin.api_version }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tooltip from "./Tooltip.vue";

export default {
  name: "App",
  components: {
    Tooltip,
  },
  data() {
    return {
      plugins: [],
    };
  },
  mounted() {
    this.fetchRepositories();
  },
  methods: {
    formatRelativeTime(dateString) {
      const now = new Date();
      const date = new Date(dateString);
      const seconds = Math.round((now.getTime() - date.getTime()) / 1000);

      let interval = Math.floor(seconds / 31536000);
      if (interval >= 1) {
        return interval + " year" + (interval === 1 ? "" : "s") + " ago";
      }

      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        return interval + " month" + (interval === 1 ? "" : "s") + " ago";
      }

      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        return interval + " day" + (interval === 1 ? "" : "s") + " ago";
      }

      interval = Math.floor(seconds / 3600);
      if (interval >= 1) {
        return interval + " hour" + (interval === 1 ? "" : "s") + " ago";
      }

      interval = Math.floor(seconds / 60);
      if (interval >= 1) {
        return interval + " minute" + (interval === 1 ? "" : "s") + " ago";
      }

      return "just now";
    },

    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.substring(0, maxLength - 3) + "...";
      }
      return text;
    },
    formatDescription(text) {
      let lines = text.match(/.{1,48}/g);
      if (lines.length > 2) {
        lines = lines.slice(0, 2);
        text = lines.join("\n") + "...";
      } else {
        text = lines.join("\n");
      }
      return text;
    },

    async fetchRepositories() {
      try {
        const response = await fetch(
          "https://api.github.com/search/repositories?q=topic:peanut-framework-plugin&sort=stars&order=desc",
          { headers: { "User-Agent": "request" } }
        );
        const data = await response.json();

        if (data.items) {
          const pluginDataPromises = data.items.map(this.fetchPluginData);
          const pluginDataArray = await Promise.all(pluginDataPromises);
          this.plugins = pluginDataArray.filter((plugin) => plugin !== null);
        } else {
          console.error("No repositories found.");
        }
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    },
    async fetchPluginData(repo) {
      try {
        const pluginJsonUrl = `https://raw.githubusercontent.com/${repo.full_name}/${repo.default_branch}/plugin.json`;
        const pluginJsonResponse = await fetch(pluginJsonUrl);

        if (!pluginJsonResponse.ok) {
          console.warn(
            `Failed to fetch plugin.json for ${repo.full_name}. Status: ${pluginJsonResponse.status}`
          );
          return null;
        }

        const pluginJson = await pluginJsonResponse.json();

        const iconUrl = `https://raw.githubusercontent.com/${repo.full_name}/refs/heads/${repo.default_branch}/plugin_icon.png`;
        const defaultIconUrl = "/missing-plugin-icon.png";

        const iconExistsResponse = await fetch(iconUrl, { method: "HEAD" });
        const icon = iconExistsResponse.ok ? iconUrl : defaultIconUrl;

        const lastUpdated = repo.updated_at;

        return {
          name: pluginJson.name,
          author: repo.owner.login,
          description: pluginJson.description,
          icon: icon,
          stars: repo.stargazers_count,
          version: pluginJson.version,
          api_version: pluginJson.api_version,
          updated: lastUpdated,
          repoUrl: repo.html_url,
        };
      } catch (error) {
        console.error(
          `Error fetching plugin data for ${repo.full_name}:`,
          error
        );
        return null;
      }
    },
    openRepo(url) {
      window.open(url, "_blank");
    },
    isOfficial(plugin) {
      return plugin.repoUrl.startsWith("https://github.com/palmmc/");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0");

.plugin-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 15px;
  padding-inline: 50px;
}

.plugin-card {
  border: none;
  padding: 10px;
  border-radius: 10px;
  background-color: #202127;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
}

.plugin-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}

.plugin-icon {
  width: 96px;
  height: 96px;
  background-color: rgba(82, 82, 78, 0.5);
  margin-right: 10px;
  border-radius: 5px;
}

.plugin-info {
  display: flex;
  flex-direction: column;
}

.plugin-title-author {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.plugin-title {
  font-family: var(--vp-font-family-base);
  font-size: 22px;
  font-weight: 900;
  color: #fbfaec;
  margin-right: 5px;
}

.plugin-author {
  font-size: 12px;
  color: #777;
  font-weight: 500;
  font-style: italic;
  align-self: center;
}

.plugin-description {
  font-size: 14px;
  margin-bottom: 5px;
  color: #fbfaec;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.plugin-stats {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #777;
  font-weight: 500;
  margin-top: 4px;
}

.plugin-stars,
.plugin-updated,
.plugin-version,
.plugin-api_version {
  display: flex;
  align-items: center;
  margin-right: 16px;
}

.plugin-star-icon {
  width: 19px;
  height: 19px;
  margin-right: 5px;
  margin-top: 0.25px;
  margin-bottom: 2px;
}

.plugin-updated-icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}

.plugin-version-icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}

.plugin-api_version-icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
  margin-top: 1px;
}

.plugin-stars span,
.plugin-updated span {
  margin-right: 20px;
}
.plugin-version span {
  margin-right: 20px;
}

.official-badge {
  color: #fff;
  font-size: 18px;
  margin-left: 5px;
}
</style>
