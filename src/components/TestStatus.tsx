import useJsonFetch from "../api/fetch"

export const TestStatus = (props: {url: string}) => {

    const {url} = props;

    let [{data, isLoading, error}] = useJsonFetch({
        url: url, 
        opts: ''
    });

    let loadingText = 'no';
    if (isLoading) {
        loadingText = 'yes';
    }
    
    if (data) {
        return (
            <div className="test">
                Testing status: {data['status']} <br/>
                isLoading: {loadingText} <br/>
                error: {error} <br/>
            </div>
        )
    }
    else if (isLoading) {
        return (
            <div className="test">
                Testing status: loading <br/>
                isLoading: {loadingText} <br/>
                error: {error} <br/>
            </div>
        )
    }
    else if (error) {
        return (
            <div className="test">
                Testing status: error <br/>
                isLoading: {loadingText} <br/>
                error: {error} <br/>
            </div>
        )
    }
    else {
        return (
            <></>
        )
    }
}