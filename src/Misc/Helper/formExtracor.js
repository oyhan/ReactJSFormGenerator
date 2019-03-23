

export const formExtractor =  (target)=>{


    const formData = new FormData(target);
        var json = {};
        for (let entry of formData.entries()) {
            json[entry[0]] = entry[1]
        }

        return JSON.stringify(json);
}