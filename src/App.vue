<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="navbar-brand"><img src="./assets/logo.png" alt="logo" width="60" /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item d-none">
              <router-link :to="{ name: 'posts.index' }" class="nav-link active" aria-current="page">Posts</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'property.index' }" class="nav-link active" aria-current="page">Property</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'agent.index' }" class="nav-link active" aria-current="page">Agent</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'project.index' }" class="nav-link active" aria-current="page">Project</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!--- render router view -->

    <router-view ></router-view>

  </div>
</template>