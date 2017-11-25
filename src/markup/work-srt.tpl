{% include "partials/_header.tpl" %}

<main class="wrap work-showcase">
  <div class="grid project-title">
    <div class="grid__col grid__col--4-of-12 grid__col--m-1-of-2 grid__col--push-1-of-12">
      <h2 class="with-sub no-deco">Shot Review Tool</h2>
      <span>
        Corporate Intranet App <br>
        2015 — ongoing
      </span>
    </div>
    <div class="tasks grid__col grid__col--4-of-12 grid__col--m-1-of-2">
      <h3 class="with-sub">Tasks</h2>
      <span>
        UI Design, UX Design, Software Development, Frontend Development, Backend Development, Data Modelling, Conception, Maintenance
      </span>
    </div>
  </div>
  <div class="grid">
    <div class="grid__col grid__col--12-of-12 gallery">

    <ul class="slider contained no-shadow srt">
      <li><img src="img/proj_title_srt_01.jpg" srcset="img/proj_title_srt_01@1x.jpg 1x, img/proj_title_srt_01@2x.jpg 2x" alt="" /></li>
      <li><img src="img/proj_title_srt_02.jpg" srcset="img/proj_title_srt_02@1x.jpg 1x, img/proj_title_srt_02@2x.jpg 2x" alt="" /></li>
      <li><img src="img/proj_title_srt_03.jpg" srcset="img/proj_title_srt_03@1x.jpg 1x, img/proj_title_srt_03@2x.jpg 2x" alt="" /></li>
    </ul>
    </div>
    <div class="grid__col grid__col--6-of-12 grid__col--centered grid__col--m-3-of-4">
      <div class="description">
        <p>
          <b>The LAVAlabs Shot Review Tool is a specialized solution for workflow problems of the visual effects industry.</b><br><br>
          The systematics of visual effects production are very intricate. The SRT helps compositing artists and supervisors to keep track of in-house progresses and allows for a more effective communication and organization. 
          The tool is deeply embedded into the workflow and acts as a live hub for all visual artifacts created during the course of a project by converting them into accessible formats and providing them in a logical representation of the projects structure.<br><br>
          While still in ongoing development, it has already redefined the work and productivity of a whole company and led to fewer workflow errors, better communication and overall understanding of the state of projects. The growing archive also acts as an easily filterable database for all visuals that have been created as well as a valuable display of the agency's most recent overall output.<br><br>
          The web app is built on a Node.JS-stack inlcuding leading technology such as mongodb, redis, react, websockets and ffmpeg.<br><br>
          Initially designed and developed for LAVAlabs, a renowned German post production and visual effects agency, the loosely named Shot Review Tool could upon completion be licensed and made available for a broader industry audience.
        </p>
      </div>
      <a href="/work" class="back">Back to all projects</a>
    </div>
    
  </div>
</main>


{% include "partials/_footer.tpl" %}