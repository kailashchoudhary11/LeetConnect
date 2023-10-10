export function timestampToWords(timestamp) {
    const inputDate = new Date(timestamp * 1000);

    const currentDate = new Date();

    const yearDifference = currentDate.getFullYear() - inputDate.getFullYear();
    const monthDifference = currentDate.getMonth() - inputDate.getMonth();
    const dayDifference = currentDate.getDate() - inputDate.getDate();
    const hourDifference = currentDate.getHours() - inputDate.getHours();

    let unit, value;

    if (yearDifference >= 1) {
        unit = "year";
        value = yearDifference;
    } else if (monthDifference >= 1) {
        unit = "month";
        value = monthDifference;
    } else if (dayDifference >= 7) {
        unit = "week";
        value = Math.floor(dayDifference / 7);
    } else if (dayDifference >= 1) {
        unit = "day";
        value = dayDifference;
    } else {
        unit = "hour";
        value = hourDifference;
    }

    const result = `${value} ${unit}${value > 1 ? "s" : ""}`;

    return result;
}

export function getSlug(text) {
    const slug = text
        .replace(/[^\w\s-]/g, "")
        .trim()
        .toLowerCase();
        
    return slug.replace(/\s+/g, "-");
}

export function getSolutionHTML(searchText, solution) {
    const createdDate = timestampToWords(solution.post.updationDate);
    const solutionSlug = getSlug(solution.title);

    return `
      <a class="flex h-[56px] items-center rounded pl-4 pr-5 bg-fill-4 dark:bg-dark-fill-4" target="_blank" data-url="/discuss/topic/${solution.id}/${solutionSlug}" data-tab="SOLUTIONS" href="/discuss/topic/${solution.id}/${solutionSlug}/">
        <div class="mr-4.5 flex flex-1 justify-between space-x-[10px]">
          <span class="text-label-1 dark:text-dark-label-1 line-clamp-1 font-medium">${searchText} - ${solution.title}</span>
          <span class="text-label-3 dark:text-dark-label-3 lc-md:inline hidden whitespace-nowrap">${createdDate} ago</span>
        </div>
        <div class="space-x-4.5 lc-md:flex hidden items-center text-label-3 dark:text-dark-label-3">
          <div class="flex items-center space-x-1" style="width: 24px;">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                <path fill-rule="evenodd" d="M7.04 9.11l3.297-7.419a1 1 0 01.914-.594 3.67 3.67 0 013.67 3.671V7.33h4.028a2.78 2.78 0 012.78 3.2l-1.228 8.01a2.778 2.778 0 01-2.769 2.363H5.019a2.78 2.78 0 01-2.78-2.78V11.89a2.78 2.78 0 012.78-2.78H7.04zm-2.02 2a.78.78 0 00-.781.78v6.232c0 .431.35.78.78.78H6.69V11.11H5.02zm12.723 7.793a.781.781 0 00.781-.666l1.228-8.01a.78.78 0 00-.791-.898h-5.04a1 1 0 01-1-1V4.77c0-.712-.444-1.32-1.07-1.56L8.69 10.322v8.58h9.053z" clip-rule="evenodd"></path>
              </svg>
            </span>
            <span>${solution.post.voteCount}</span>
          </div>
          <div class="flex items-center space-x-1" style="width: 44px;">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                <path fill-rule="evenodd" d="M1.104 12.444a1 1 0 010-.888c.13-.26.37-.693.722-1.241A18.85 18.85 0 013.88 7.652C6.184 5.176 8.896 3.667 12 3.667s5.816 1.509 8.119 3.985c.79.85 1.475 1.756 2.055 2.663.352.548.593.98.722 1.24a1 1 0 010 .89c-.13.26-.37.692-.722 1.24a18.848 18.848 0 01-2.055 2.663c-2.303 2.476-5.015 3.985-8.119 3.985s-5.816-1.509-8.119-3.985a18.846 18.846 0 01-2.055-2.663c-.352-.548-.593-.98-.722-1.24zm2.406.162a16.87 16.87 0 001.836 2.38c1.959 2.106 4.19 3.347 6.654 3.347 2.465 0 4.695-1.24 6.654-3.347A16.87 16.87 0 0020.86 12a16.871 16.871 0 00-2.206-2.986C16.695 6.908 14.464 5.667 12 5.667c-2.465 0-4.695 1.24-6.654 3.347A16.87 16.87 0 003.14 12c.108.188.232.391.37.607zM12 15.75c-2.06 0-3.727-1.68-3.727-3.75 0-2.07 1.667-3.75 3.727-3.75 2.06 0 3.727 1.68 3.727 3.75 0 2.07-1.667 3.75-3.727 3.75zm0-2c.952 0 1.727-.782 1.727-1.75s-.775-1.75-1.727-1.75c-.952 0-1.727.782-1.727 1.75s.775 1.75 1.727 1.75z" clip-rule="evenodd">
                </path>
              </svg>
            </span>
            <span>${solution.viewCount}</span>
          </div>
        </div>
      </a>`;
}
