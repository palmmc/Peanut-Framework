<h1>Guides</h1>

<div style="height: 3px;"></div>

---

<b><span style='font-size:24px;'>Start your First Project</span></b><br>

<div class="grid-cards">
  <a class="grid-card" href="/pages/guides/getting-started" title="Getting Started">
    <div class="grid-card-content">
      <div class="grid-card-title" style="display:inline-block;">Getting Started</div> <span class="label easy">EASY</span>
      <p class="grid-card-description">
        Learn from start to finish how to make your first project with Peanut Framework.
      </p>
      <span class="grid-card-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.75.75 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0"></path>
        </svg>
        Setup
      </span>
    </div>
  </a>

</div>

<div style="height: 3px;"></div>

---

<b><span style='font-size:24px;'>Using Plugins</span></b><br>

<div class="grid-cards">
  <a class="grid-card" href="/pages/guides/loading-plugins" title="Loading Plugins">
    <div class="grid-card-content">
      <div class="grid-card-title" style="display:inline-block;">Loading Plugins</div> <span class="label easy">EASY</span>
      <p class="grid-card-description">
        Learn to make your creation process even easier using plugins!
      </p>
      <span class="grid-card-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.75.75 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0"></path>
        </svg>
        Installing a Plugin
      </span>
    </div>
  </a>

  <a class="grid-card" href="/pages/guides/creating-a-plugin" title="Creating a Plugin">
    <div class="grid-card-content">
      <div class="grid-card-title" style="display:inline-block;">Creating a Plugin</div> <span class="label advanced">ADVANCED</span>
      <p class="grid-card-description">
        Find out how to create your own plugins to streamline repetitive features!
      </p>
      <span class="grid-card-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.75.75 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0"></path>
        </svg>
        Creating a Layout
      </span>
    </div>
  </a>
</div>

<style>
  .grid-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .grid-card {
    width: calc(50% - 10px); /* Adjust for desired width */
    background-color: #222; /* Dark background color */
    border: 1px solid #555; /* Darker border */
    border-radius: 5px;
    padding: 20px;
    text-decoration: none;
    color: #eee; /* Light text color */
    display: flex;
    flex-direction: column;
  }

  .grid-card:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* More pronounced hover effect */
  }

  .grid-card-content {
    flex-grow: 1;
  }

  .grid-card-title {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .grid-card-description {
    font-size: 0.9em;
    color: #bbb; /* Lighter description color */
    margin-bottom: 15px;
  }

  .grid-card-link {
    font-size: 1em; /* Increased font size */
    color: #d5dbe4; /* White text color */
    align-self: flex-end;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .grid-card-link svg {
    width: 16px; /* Adjust icon size as needed */
    height: 16px;
    fill: currentColor; /* Inherit color from parent */
  }

  /* Remove underline from all text within grid cards */
  a, a:hover, a:focus, a:active {
      text-decoration: none !important;
  }
</style>

<Guide />
