export type GiphyType = {
    id: string;
    title: string;
    images: {
        fixed_width: {
            url: string;
        }
    }
}

export type SearchSlice = {
    searchQuery: {
        value: string;
    };
};

export type GiphySearchResult = {
    data: GiphyType[];
    pagination: {
        total_count: number;
        count: number;
        offset: number;
    };
    meta: {
        status: number;
        msg: string;
        response_id: string;
    };
};
