
function EventComponent() {

    {/*Event Container*/ }
    var name = "Man Utd vs Totenham 0-2";
    let tags: string[]=["Football","Sports"]

    return(
    <div class="block bg-white border p-4 mb-4 shadow-md">
      <span class="inline-block">
        <span class="text mt-2 text-textdark font-semibold">{name}</span>
        <span class="bg-primary text-white rounded px-2 py-1 text-sm">
          {tags[0]}
        </span>
      </span>
      <div class="remaining-time flex justify-between items-right mt-2 text-primary text-sm">
        <span data-end="2023-08-25T00:00:00">Calculating...</span>
      </div>
    </div>
    );
  
  }
  export default EventComponent;
