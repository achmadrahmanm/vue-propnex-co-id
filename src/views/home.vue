<script setup></script>

<template>
  <div class="bg-light rounded-3" style="height: 100vh;">
    <div class="container">
      <div class="row" style="background-image: url('/src/assets/hero-banner-1.webp');background-repeat: no-repeat; background-size: 100% auto;">
                <div class="col-12 col-md-12 col-lg-6 col-sm-0" style="height: 445px;">

                </div>
                <div class="col-12 col-md-12 col-lg-6  search-bar-on-home">
                    <form class="form-inline my-2 my-lg-0" action="/search" method="get">
                        <div class="row">
                            <div class="col-md-10 mx-auto">
                                <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-1">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <button id="searchReset" aria-label="searchReset" type="submit" class="btn btn-link text-primary" style="padding: 11px 14px;"><svg class="svg-inline--fa fa-magnifying-glass" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"></path></svg><!-- <i class="fa fa-search"></i> Font Awesome fontawesome.com --></button>
                                        </div>
                                        <input type="search" placeholder="Cari properti, project, lokasi, developer" name="query" id="query" aria-describedby="searchReset" class="form-control rounded rounded-pill border-0 bg-light">
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-10 justify-content-center text-center mx-auto">
                                <div class="btn-group shadow-sm mb-3" style="background: #FFFFFF;box-shadow: 9px 8px 10px rgba(0, 0, 0, 0.05);border-radius: 45px;" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" class="btn-check" name="option" id="btnSearchJual" autocomplete="off" value="jual">
                                    <label class="btn btn-outline-primary btn-sm" for="btnSearchJual" style="border-radius:20px;border:unset">Jual</label>
                                    <input type="radio" class="btn-check " name="option" id="btnSearchSewa" autocomplete="off" value="sewa">
                                    <label class="btn btn-outline-primary btn-sm" for="btnSearchSewa" style="border-radius:20px;border:unset">Sewa</label>
                                    <input type="radio" class="btn-check " name="option" id="btnSearchJualSewa" autocomplete="off" value="jual,sewa" checked="">
                                    <label class="btn btn-outline-primary btn-sm" for="btnSearchJualSewa" style="border-radius:20px;border:unset">Jual &amp; Sewa</label>
                                    <input type="radio" class="btn-check " name="option" id="btnSearchProject" autocomplete="off" value="project">
                                    <label class="btn btn-outline-primary btn-sm" for="btnSearchProject" style="border-radius:20px;border:unset">Project</label>
                                    <input type="radio" class="btn-check" name="option" id="btnSearchAgent" autocomplete="off" value="agent">
                                    <label class="btn btn-outline-primary btn-sm" for="btnSearchAgent" style="border-radius:20px; border:unset">Agent</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
      <h1 class="display-5 fw-bold">Welcome to HOME</h1>
      <p class="col-md-8 fs-4">
        Belajar CRUD dengan Vue 3 dan Laravel 10 di SantriKoding.com
      </p>
    </div>
  </div>
</template>
