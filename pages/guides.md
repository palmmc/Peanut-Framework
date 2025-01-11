<h1>Guides</h1>

<div style="height: 45px;"></div>

<div class="grid-cards">
  <a class="grid-card" href="guides/getting-started" title="Getting Started">
    <div class="grid-card-content">
      <div class="grid-card-title">Start your First Project</div>
      <p class="grid-card-description">
        Learn from start to finish how to make your first project with Peanut Framework.
      </p>
      <span class="grid-card-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.75.75 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0"></path>
        </svg>
        How to Setup
      </span>
    </div>
  </a>

  <a class="grid-card" href="guides/creating-a-custom-block" title="Creating a Custom Block">
    <div class="grid-card-content">
      <div class="grid-card-title">Creating a Custom Block</div>
      <p class="grid-card-description">
        Our step-by-step tutorial takes you from zero to hero as you create your first plugin.
      </p>
      <span class="grid-card-link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.75.75 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0"></path>
        </svg>
        Tutorials
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
  .grid-cards a {
    text-decoration: none; 
  }
</style>
