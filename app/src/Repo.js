
//https://raw.github.com/erickhouse/InterviewPractice/master/cat.jpg

function pullData(func){

        fetch('https://api.github.com/users/erickhouse/repos?sort=updated')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            var repos = data.map(gitRepo => {
                return {
                    updated: new Date(gitRepo.updated_at),
                    description: gitRepo.description,
                    name: gitRepo.name,
                    url: gitRepo.html_url,
                    imgUrl: `https://raw.github.com/erickhouse/${gitRepo.name}/master/site/${gitRepo.name}.png`,
                    languages: gitRepo.languages_url
                }
            });

            Promise
            .all(repos.map(repo => {
                return fetch(repo.languages).then(response => {
                    return response.json();
                });
            }))
            .then(values => {
                for(var i = 0;i < values.length; i ++){
                    repos[i].languages = values[i];
                }
                func(repos);
            })

        });

}

export default pullData;