import { useState } from "react";
import { useEffect } from "react";

const NextPageButton =({page, setPage}) =>{
    return (
        <section>
            <p>Page: {page}</p>
        <button>Next Page</button>
        </section>
    )
}

export default NextPageButton