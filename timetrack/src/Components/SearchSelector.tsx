
function SearchSelector() {

    return (
        <div class="join">
            <div>
                <div>
                    <input class="input input-bordered join-item" placeholder="Search" />
                </div>
            </div>
            <select class="select select-bordered join-item">
                <option disabled selected>Tags</option>
                <option>Tag 1</option>
                <option>Tag 2</option>
                <option></option>
            </select>
            <button class="btn btn-circle join-item">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>

        </div>

    )
}
export default SearchSelector