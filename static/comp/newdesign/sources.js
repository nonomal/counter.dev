customElements.define(
    tagName(),
    class extends HTMLElement {
        draw(ref) {
            var refentries = Object.entries(ref)
            this.innerHTML = `
        <div class="sources" id="sources">
          <div class="metrics-headline">
            <img src="img/sources.svg" width="24" height="24" alt="Sources">
            <h3 class="ml16">Sources</h3>
          </div>
          <div class="sources-countries-data caption gray bg-gray mt16 mb24">
            <span>Source</span>
            <span>Visitors</span>
          </div>
          <!-- Items -->
          ${refentries.map((item) => this.drawItem(item[0], item[1])).join('')}
          <!-- View all -->
          <a href="#modal-sources" class="sources-countries-item sources-countries-item-wrap view-all shadow-sm" rel="modal:open">
            <span>
              <div class="view-all-icon animation"></div>
              <span class="black strong view-all-text animation">View all</span>
            </span>
            <img src="img/chevron-right.svg" width="24" height="24" alt="Chevron">
          </a>
          <!-- /// -->
        </div>`
        }
        drawItem(domain, count){
            return `
          <div class="sources-countries-item shadow-sm mb8">
            <div class="percent-line" style="width: 90%;"></div>
            <div class="sources-countries-item-wrap">
              <span>
                <img src="https://icons.duckduckgo.com/ip3/${escapeHtml(domain)}.ico" width="16" height="16" alt="Google">
                <a href="#" class="black" target="_blank" rel="nofollow">${escapeHtml(domain)}</a>
              </span>
              <span>
                <span class="strong mr16">${escapeHtml(count)}</span>
                <span class="item-percent bg-blue blue caption">90%</span>
              </span>
            </div>
          </div>
          `
        }
    }
);
