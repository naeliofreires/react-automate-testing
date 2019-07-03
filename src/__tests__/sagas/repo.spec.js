import { runSaga } from "redux-saga";
import { getRepositories } from "../../store/sagas/repositories";
import { Creators as RepositoriesActios } from "../../store/ducks/repositories";

const response = [
  {
    id: 152336978,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTIzMzY5Nzg=",
    name: "android-api-retrofit-butter-knife",
    full_name: "naeliofreires/android-api-retrofit-butter-knife",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url:
      "https://github.com/naeliofreires/android-api-retrofit-butter-knife",
    description: "Consumindo APIs em Android com Retrofit e Butter Knife",
    fork: false,
    url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife",
    forks_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/android-api-retrofit-butter-knife/deployments",
    created_at: "2018-10-09T23:59:30Z",
    updated_at: "2018-12-03T22:32:54Z",
    pushed_at: "2018-10-10T02:34:00Z",
    git_url:
      "git://github.com/naeliofreires/android-api-retrofit-butter-knife.git",
    ssh_url:
      "git@github.com:naeliofreires/android-api-retrofit-butter-knife.git",
    clone_url:
      "https://github.com/naeliofreires/android-api-retrofit-butter-knife.git",
    svn_url:
      "https://github.com/naeliofreires/android-api-retrofit-butter-knife",
    homepage: null,
    size: 126,
    stargazers_count: 1,
    watchers_count: 1,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "master"
  },
  {
    id: 124007214,
    node_id: "MDEwOlJlcG9zaXRvcnkxMjQwMDcyMTQ=",
    name: "android-bluetooth-arduino",
    full_name: "naeliofreires/android-bluetooth-arduino",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/android-bluetooth-arduino",
    description:
      "APLICAÇÃO ANDROID PARA CONTROLE VIA BLUETOOTH DE UMA ARANHA CONSTRUIDA COM ARDUINO ",
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino",
    forks_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/android-bluetooth-arduino/deployments",
    created_at: "2018-03-06T02:16:19Z",
    updated_at: "2019-03-17T14:46:02Z",
    pushed_at: "2019-03-17T14:46:01Z",
    git_url: "git://github.com/naeliofreires/android-bluetooth-arduino.git",
    ssh_url: "git@github.com:naeliofreires/android-bluetooth-arduino.git",
    clone_url: "https://github.com/naeliofreires/android-bluetooth-arduino.git",
    svn_url: "https://github.com/naeliofreires/android-bluetooth-arduino",
    homepage: "",
    size: 254,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 126544188,
    node_id: "MDEwOlJlcG9zaXRvcnkxMjY1NDQxODg=",
    name: "angular-exemplos",
    full_name: "naeliofreires/angular-exemplos",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/angular-exemplos",
    description:
      "REPOSITORIO PARA GUARDAR EXEMPLOS DE ALGUMAS FUNCIONALIDADES DO ANGULAR PARA REUSO DE CÓDIGO",
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/angular-exemplos",
    forks_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/angular-exemplos/deployments",
    created_at: "2018-03-23T22:19:43Z",
    updated_at: "2018-04-17T17:07:38Z",
    pushed_at: "2018-04-07T13:55:59Z",
    git_url: "git://github.com/naeliofreires/angular-exemplos.git",
    ssh_url: "git@github.com:naeliofreires/angular-exemplos.git",
    clone_url: "https://github.com/naeliofreires/angular-exemplos.git",
    svn_url: "https://github.com/naeliofreires/angular-exemplos",
    homepage: "",
    size: 2,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 114181817,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTQxODE4MTc=",
    name: "AngularJS-Introducao",
    full_name: "naeliofreires/AngularJS-Introducao",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/AngularJS-Introducao",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/AngularJS-Introducao",
    forks_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/AngularJS-Introducao/deployments",
    created_at: "2017-12-14T00:08:43Z",
    updated_at: "2017-12-15T16:57:45Z",
    pushed_at: "2017-12-15T16:58:04Z",
    git_url: "git://github.com/naeliofreires/AngularJS-Introducao.git",
    ssh_url: "git@github.com:naeliofreires/AngularJS-Introducao.git",
    clone_url: "https://github.com/naeliofreires/AngularJS-Introducao.git",
    svn_url: "https://github.com/naeliofreires/AngularJS-Introducao",
    homepage: null,
    size: 65,
    stargazers_count: 0,
    watchers_count: 0,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 118840790,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTg4NDA3OTA=",
    name: "APIRestfullSpringBoot",
    full_name: "naeliofreires/APIRestfullSpringBoot",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/APIRestfullSpringBoot",
    description: "API RESTFULL COM SPRING BOOT",
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot",
    forks_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/APIRestfullSpringBoot/deployments",
    created_at: "2018-01-25T00:40:30Z",
    updated_at: "2018-04-20T12:15:29Z",
    pushed_at: "2018-01-26T01:57:32Z",
    git_url: "git://github.com/naeliofreires/APIRestfullSpringBoot.git",
    ssh_url: "git@github.com:naeliofreires/APIRestfullSpringBoot.git",
    clone_url: "https://github.com/naeliofreires/APIRestfullSpringBoot.git",
    svn_url: "https://github.com/naeliofreires/APIRestfullSpringBoot",
    homepage: "",
    size: 52,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Shell",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 114907803,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTQ5MDc4MDM=",
    name: "bot_telegram",
    full_name: "naeliofreires/bot_telegram",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/bot_telegram",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/bot_telegram",
    forks_url: "https://api.github.com/repos/naeliofreires/bot_telegram/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/naeliofreires/bot_telegram/teams",
    hooks_url: "https://api.github.com/repos/naeliofreires/bot_telegram/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/branches{/branch}",
    tags_url: "https://api.github.com/repos/naeliofreires/bot_telegram/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/bot_telegram/deployments",
    created_at: "2017-12-20T16:22:54Z",
    updated_at: "2017-12-20T16:27:35Z",
    pushed_at: "2017-12-22T18:41:09Z",
    git_url: "git://github.com/naeliofreires/bot_telegram.git",
    ssh_url: "git@github.com:naeliofreires/bot_telegram.git",
    clone_url: "https://github.com/naeliofreires/bot_telegram.git",
    svn_url: "https://github.com/naeliofreires/bot_telegram",
    homepage: null,
    size: 73,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Python",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 129928725,
    node_id: "MDEwOlJlcG9zaXRvcnkxMjk5Mjg3MjU=",
    name: "creat-and-read-file-xlsx",
    full_name: "naeliofreires/creat-and-read-file-xlsx",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/creat-and-read-file-xlsx",
    description: "create/reading file .XLSX in Java with APACHE POI",
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx",
    forks_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/creat-and-read-file-xlsx/deployments",
    created_at: "2018-04-17T15:48:13Z",
    updated_at: "2018-09-20T18:18:54Z",
    pushed_at: "2018-05-07T14:29:38Z",
    git_url: "git://github.com/naeliofreires/creat-and-read-file-xlsx.git",
    ssh_url: "git@github.com:naeliofreires/creat-and-read-file-xlsx.git",
    clone_url: "https://github.com/naeliofreires/creat-and-read-file-xlsx.git",
    svn_url: "https://github.com/naeliofreires/creat-and-read-file-xlsx",
    homepage: "",
    size: 8,
    stargazers_count: 1,
    watchers_count: 1,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 2,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 2,
    open_issues: 0,
    watchers: 1,
    default_branch: "master"
  },
  {
    id: 166322360,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjYzMjIzNjA=",
    name: "curso-nodejs",
    full_name: "naeliofreires/curso-nodejs",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/curso-nodejs",
    description: "#NodeBR!",
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/curso-nodejs",
    forks_url: "https://api.github.com/repos/naeliofreires/curso-nodejs/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/naeliofreires/curso-nodejs/teams",
    hooks_url: "https://api.github.com/repos/naeliofreires/curso-nodejs/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/branches{/branch}",
    tags_url: "https://api.github.com/repos/naeliofreires/curso-nodejs/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/curso-nodejs/deployments",
    created_at: "2019-01-18T01:21:32Z",
    updated_at: "2019-02-05T12:17:38Z",
    pushed_at: "2019-02-05T12:17:35Z",
    git_url: "git://github.com/naeliofreires/curso-nodejs.git",
    ssh_url: "git@github.com:naeliofreires/curso-nodejs.git",
    clone_url: "https://github.com/naeliofreires/curso-nodejs.git",
    svn_url: "https://github.com/naeliofreires/curso-nodejs",
    homepage: null,
    size: 1469,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 149451276,
    node_id: "MDEwOlJlcG9zaXRvcnkxNDk0NTEyNzY=",
    name: "CursoReactNative",
    full_name: "naeliofreires/CursoReactNative",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/CursoReactNative",
    description: "Repository of the course of React Native made at Udemy",
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/CursoReactNative",
    forks_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/CursoReactNative/deployments",
    created_at: "2018-09-19T12:59:58Z",
    updated_at: "2018-09-27T15:15:53Z",
    pushed_at: "2018-09-27T15:15:51Z",
    git_url: "git://github.com/naeliofreires/CursoReactNative.git",
    ssh_url: "git@github.com:naeliofreires/CursoReactNative.git",
    clone_url: "https://github.com/naeliofreires/CursoReactNative.git",
    svn_url: "https://github.com/naeliofreires/CursoReactNative",
    homepage: "",
    size: 136,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 97636076,
    node_id: "MDEwOlJlcG9zaXRvcnk5NzYzNjA3Ng==",
    name: "DesenvolvimentoAndroidCurso",
    full_name: "naeliofreires/DesenvolvimentoAndroidCurso",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/DesenvolvimentoAndroidCurso",
    description:
      "Resolution of the exercises of the Android Course made at Udemy ",
    fork: false,
    url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso",
    forks_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoAndroidCurso/deployments",
    created_at: "2017-07-18T19:30:07Z",
    updated_at: "2018-09-20T18:20:49Z",
    pushed_at: "2018-07-29T21:23:27Z",
    git_url: "git://github.com/naeliofreires/DesenvolvimentoAndroidCurso.git",
    ssh_url: "git@github.com:naeliofreires/DesenvolvimentoAndroidCurso.git",
    clone_url:
      "https://github.com/naeliofreires/DesenvolvimentoAndroidCurso.git",
    svn_url: "https://github.com/naeliofreires/DesenvolvimentoAndroidCurso",
    homepage: "",
    size: 1164,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 101204213,
    node_id: "MDEwOlJlcG9zaXRvcnkxMDEyMDQyMTM=",
    name: "DesenvolvimentoSoftwarePersistencia",
    full_name: "naeliofreires/DesenvolvimentoSoftwarePersistencia",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url:
      "https://github.com/naeliofreires/DesenvolvimentoSoftwarePersistencia",
    description:
      "XML, YAML, JSON Serialização de objetos, JDBC, JPA2, MongoDB, Redis, Cassandra, Neo4J e Firebase",
    fork: false,
    url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia",
    forks_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoSoftwarePersistencia/deployments",
    created_at: "2017-08-23T16:52:35Z",
    updated_at: "2018-04-18T14:28:55Z",
    pushed_at: "2017-11-28T01:54:27Z",
    git_url:
      "git://github.com/naeliofreires/DesenvolvimentoSoftwarePersistencia.git",
    ssh_url:
      "git@github.com:naeliofreires/DesenvolvimentoSoftwarePersistencia.git",
    clone_url:
      "https://github.com/naeliofreires/DesenvolvimentoSoftwarePersistencia.git",
    svn_url:
      "https://github.com/naeliofreires/DesenvolvimentoSoftwarePersistencia",
    homepage: "",
    size: 12607,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 1,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 89898973,
    node_id: "MDEwOlJlcG9zaXRvcnk4OTg5ODk3Mw==",
    name: "DesenvolvimentoWeb",
    full_name: "naeliofreires/DesenvolvimentoWeb",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/DesenvolvimentoWeb",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb",
    forks_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/DesenvolvimentoWeb/deployments",
    created_at: "2017-05-01T05:08:11Z",
    updated_at: "2017-12-20T16:36:52Z",
    pushed_at: "2017-05-31T23:00:50Z",
    git_url: "git://github.com/naeliofreires/DesenvolvimentoWeb.git",
    ssh_url: "git@github.com:naeliofreires/DesenvolvimentoWeb.git",
    clone_url: "https://github.com/naeliofreires/DesenvolvimentoWeb.git",
    svn_url: "https://github.com/naeliofreires/DesenvolvimentoWeb",
    homepage: null,
    size: 28321,
    stargazers_count: 0,
    watchers_count: 0,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 1,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 1,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 91852885,
    node_id: "MDEwOlJlcG9zaXRvcnk5MTg1Mjg4NQ==",
    name: "EngenhariaSoftwareTrabalhoFinal",
    full_name: "naeliofreires/EngenhariaSoftwareTrabalhoFinal",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url:
      "https://github.com/naeliofreires/EngenhariaSoftwareTrabalhoFinal",
    description: null,
    fork: false,
    url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal",
    forks_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/EngenhariaSoftwareTrabalhoFinal/deployments",
    created_at: "2017-05-19T23:37:32Z",
    updated_at: "2018-02-03T02:44:39Z",
    pushed_at: "2017-07-04T05:03:35Z",
    git_url:
      "git://github.com/naeliofreires/EngenhariaSoftwareTrabalhoFinal.git",
    ssh_url: "git@github.com:naeliofreires/EngenhariaSoftwareTrabalhoFinal.git",
    clone_url:
      "https://github.com/naeliofreires/EngenhariaSoftwareTrabalhoFinal.git",
    svn_url: "https://github.com/naeliofreires/EngenhariaSoftwareTrabalhoFinal",
    homepage: null,
    size: 9501,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 145907591,
    node_id: "MDEwOlJlcG9zaXRvcnkxNDU5MDc1OTE=",
    name: "facebook-spring-login-exemplo",
    full_name: "naeliofreires/facebook-spring-login-exemplo",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/facebook-spring-login-exemplo",
    description: null,
    fork: false,
    url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo",
    forks_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/facebook-spring-login-exemplo/deployments",
    created_at: "2018-08-23T21:10:11Z",
    updated_at: "2018-08-23T21:12:08Z",
    pushed_at: "2018-08-23T21:12:07Z",
    git_url: "git://github.com/naeliofreires/facebook-spring-login-exemplo.git",
    ssh_url: "git@github.com:naeliofreires/facebook-spring-login-exemplo.git",
    clone_url:
      "https://github.com/naeliofreires/facebook-spring-login-exemplo.git",
    svn_url: "https://github.com/naeliofreires/facebook-spring-login-exemplo",
    homepage: null,
    size: 47,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 142797827,
    node_id: "MDEwOlJlcG9zaXRvcnkxNDI3OTc4Mjc=",
    name: "FlappyBird",
    full_name: "naeliofreires/FlappyBird",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/FlappyBird",
    description: "CLONE DO JOGO FLIPPY BIRD EM ANDROID",
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/FlappyBird",
    forks_url: "https://api.github.com/repos/naeliofreires/FlappyBird/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/naeliofreires/FlappyBird/teams",
    hooks_url: "https://api.github.com/repos/naeliofreires/FlappyBird/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/issues/events{/number}",
    events_url: "https://api.github.com/repos/naeliofreires/FlappyBird/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/branches{/branch}",
    tags_url: "https://api.github.com/repos/naeliofreires/FlappyBird/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/naeliofreires/FlappyBird/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/FlappyBird/deployments",
    created_at: "2018-07-29T21:49:14Z",
    updated_at: "2018-08-03T02:19:06Z",
    pushed_at: "2018-08-03T02:19:04Z",
    git_url: "git://github.com/naeliofreires/FlappyBird.git",
    ssh_url: "git@github.com:naeliofreires/FlappyBird.git",
    clone_url: "https://github.com/naeliofreires/FlappyBird.git",
    svn_url: "https://github.com/naeliofreires/FlappyBird",
    homepage: "",
    size: 397,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 163320019,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjMzMjAwMTk=",
    name: "FlexBlog",
    full_name: "naeliofreires/FlexBlog",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/FlexBlog",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/FlexBlog",
    forks_url: "https://api.github.com/repos/naeliofreires/FlexBlog/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/naeliofreires/FlexBlog/teams",
    hooks_url: "https://api.github.com/repos/naeliofreires/FlexBlog/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/issues/events{/number}",
    events_url: "https://api.github.com/repos/naeliofreires/FlexBlog/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/branches{/branch}",
    tags_url: "https://api.github.com/repos/naeliofreires/FlexBlog/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/naeliofreires/FlexBlog/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/FlexBlog/deployments",
    created_at: "2018-12-27T17:24:47Z",
    updated_at: "2018-12-30T16:37:28Z",
    pushed_at: "2018-12-30T16:37:27Z",
    git_url: "git://github.com/naeliofreires/FlexBlog.git",
    ssh_url: "git@github.com:naeliofreires/FlexBlog.git",
    clone_url: "https://github.com/naeliofreires/FlexBlog.git",
    svn_url: "https://github.com/naeliofreires/FlexBlog",
    homepage: null,
    size: 543,
    stargazers_count: 0,
    watchers_count: 0,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 174698332,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzQ2OTgzMzI=",
    name: "GitHubCompare",
    full_name: "naeliofreires/GitHubCompare",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/GitHubCompare",
    description: "App GitHubCompare - React JS",
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/GitHubCompare",
    forks_url: "https://api.github.com/repos/naeliofreires/GitHubCompare/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/naeliofreires/GitHubCompare/teams",
    hooks_url: "https://api.github.com/repos/naeliofreires/GitHubCompare/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/branches{/branch}",
    tags_url: "https://api.github.com/repos/naeliofreires/GitHubCompare/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/GitHubCompare/deployments",
    created_at: "2019-03-09T13:32:13Z",
    updated_at: "2019-03-13T01:37:17Z",
    pushed_at: "2019-03-13T01:37:16Z",
    git_url: "git://github.com/naeliofreires/GitHubCompare.git",
    ssh_url: "git@github.com:naeliofreires/GitHubCompare.git",
    clone_url: "https://github.com/naeliofreires/GitHubCompare.git",
    svn_url: "https://github.com/naeliofreires/GitHubCompare",
    homepage: "",
    size: 177,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 172240943,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzIyNDA5NDM=",
    name: "GoBarber",
    full_name: "naeliofreires/GoBarber",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/GoBarber",
    description: "App GoBarber - Node JS",
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/GoBarber",
    forks_url: "https://api.github.com/repos/naeliofreires/GoBarber/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/naeliofreires/GoBarber/teams",
    hooks_url: "https://api.github.com/repos/naeliofreires/GoBarber/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/issues/events{/number}",
    events_url: "https://api.github.com/repos/naeliofreires/GoBarber/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/branches{/branch}",
    tags_url: "https://api.github.com/repos/naeliofreires/GoBarber/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/naeliofreires/GoBarber/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/GoBarber/deployments",
    created_at: "2019-02-23T17:11:09Z",
    updated_at: "2019-02-27T23:18:35Z",
    pushed_at: "2019-02-27T23:18:33Z",
    git_url: "git://github.com/naeliofreires/GoBarber.git",
    ssh_url: "git@github.com:naeliofreires/GoBarber.git",
    clone_url: "https://github.com/naeliofreires/GoBarber.git",
    svn_url: "https://github.com/naeliofreires/GoBarber",
    homepage: "",
    size: 78,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 173005950,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzMwMDU5NTA=",
    name: "GoMarketplace",
    full_name: "naeliofreires/GoMarketplace",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/GoMarketplace",
    description: "App GoMarketplace - Node JS",
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/GoMarketplace",
    forks_url: "https://api.github.com/repos/naeliofreires/GoMarketplace/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/naeliofreires/GoMarketplace/teams",
    hooks_url: "https://api.github.com/repos/naeliofreires/GoMarketplace/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/branches{/branch}",
    tags_url: "https://api.github.com/repos/naeliofreires/GoMarketplace/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/GoMarketplace/deployments",
    created_at: "2019-02-27T23:23:31Z",
    updated_at: "2019-02-28T19:51:33Z",
    pushed_at: "2019-02-28T19:51:31Z",
    git_url: "git://github.com/naeliofreires/GoMarketplace.git",
    ssh_url: "git@github.com:naeliofreires/GoMarketplace.git",
    clone_url: "https://github.com/naeliofreires/GoMarketplace.git",
    svn_url: "https://github.com/naeliofreires/GoMarketplace",
    homepage: null,
    size: 69,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 94841100,
    node_id: "MDEwOlJlcG9zaXRvcnk5NDg0MTEwMA==",
    name: "iSeries",
    full_name: "naeliofreires/iSeries",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/iSeries",
    description: "TRABALHO FINAL DA DISCIPLINA DE DESENVOLVIMENTO WEB",
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/iSeries",
    forks_url: "https://api.github.com/repos/naeliofreires/iSeries/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/iSeries/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/iSeries/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/naeliofreires/iSeries/teams",
    hooks_url: "https://api.github.com/repos/naeliofreires/iSeries/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/iSeries/issues/events{/number}",
    events_url: "https://api.github.com/repos/naeliofreires/iSeries/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/iSeries/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/iSeries/branches{/branch}",
    tags_url: "https://api.github.com/repos/naeliofreires/iSeries/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/iSeries/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/iSeries/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/iSeries/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/iSeries/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/iSeries/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/iSeries/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/iSeries/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/iSeries/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/iSeries/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/iSeries/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/iSeries/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/iSeries/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/iSeries/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/iSeries/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/iSeries/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/iSeries/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/naeliofreires/iSeries/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/iSeries/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/iSeries/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/iSeries/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/iSeries/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/iSeries/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/iSeries/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/iSeries/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/iSeries/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/iSeries/deployments",
    created_at: "2017-06-20T02:27:53Z",
    updated_at: "2018-04-19T11:41:03Z",
    pushed_at: "2017-07-10T04:50:56Z",
    git_url: "git://github.com/naeliofreires/iSeries.git",
    ssh_url: "git@github.com:naeliofreires/iSeries.git",
    clone_url: "https://github.com/naeliofreires/iSeries.git",
    svn_url: "https://github.com/naeliofreires/iSeries",
    homepage: "",
    size: 10778,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 132351822,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzIzNTE4MjI=",
    name: "Java8",
    full_name: "naeliofreires/Java8",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/Java8",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/Java8",
    forks_url: "https://api.github.com/repos/naeliofreires/Java8/forks",
    keys_url: "https://api.github.com/repos/naeliofreires/Java8/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/Java8/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/naeliofreires/Java8/teams",
    hooks_url: "https://api.github.com/repos/naeliofreires/Java8/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/Java8/issues/events{/number}",
    events_url: "https://api.github.com/repos/naeliofreires/Java8/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/Java8/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/Java8/branches{/branch}",
    tags_url: "https://api.github.com/repos/naeliofreires/Java8/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/Java8/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/Java8/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/Java8/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/Java8/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/Java8/statuses/{sha}",
    languages_url: "https://api.github.com/repos/naeliofreires/Java8/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/Java8/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/Java8/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/Java8/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/Java8/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/Java8/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/Java8/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/Java8/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/Java8/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/Java8/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/Java8/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/naeliofreires/Java8/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/Java8/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/naeliofreires/Java8/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/Java8/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/Java8/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/Java8/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/Java8/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/Java8/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/Java8/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/Java8/deployments",
    created_at: "2018-05-06T15:31:52Z",
    updated_at: "2018-05-13T13:46:29Z",
    pushed_at: "2018-05-13T13:46:28Z",
    git_url: "git://github.com/naeliofreires/Java8.git",
    ssh_url: "git@github.com:naeliofreires/Java8.git",
    clone_url: "https://github.com/naeliofreires/Java8.git",
    svn_url: "https://github.com/naeliofreires/Java8",
    homepage: null,
    size: 18,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 135505811,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzU1MDU4MTE=",
    name: "JSON-Web-Tokens",
    full_name: "naeliofreires/JSON-Web-Tokens",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/JSON-Web-Tokens",
    description: "Configuraton simple of JWT for to reuse code.",
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens",
    forks_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/branches{/branch}",
    tags_url: "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/JSON-Web-Tokens/deployments",
    created_at: "2018-05-30T22:59:48Z",
    updated_at: "2018-09-20T18:17:20Z",
    pushed_at: "2018-05-30T23:02:50Z",
    git_url: "git://github.com/naeliofreires/JSON-Web-Tokens.git",
    ssh_url: "git@github.com:naeliofreires/JSON-Web-Tokens.git",
    clone_url: "https://github.com/naeliofreires/JSON-Web-Tokens.git",
    svn_url: "https://github.com/naeliofreires/JSON-Web-Tokens",
    homepage: "",
    size: 5,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 133038485,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzMwMzg0ODU=",
    name: "minicurso-wtisc-2018",
    full_name: "naeliofreires/minicurso-wtisc-2018",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/minicurso-wtisc-2018",
    description: null,
    fork: true,
    url: "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018",
    forks_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/minicurso-wtisc-2018/deployments",
    created_at: "2018-05-11T12:43:50Z",
    updated_at: "2018-05-11T12:43:52Z",
    pushed_at: "2018-05-11T12:33:44Z",
    git_url: "git://github.com/naeliofreires/minicurso-wtisc-2018.git",
    ssh_url: "git@github.com:naeliofreires/minicurso-wtisc-2018.git",
    clone_url: "https://github.com/naeliofreires/minicurso-wtisc-2018.git",
    svn_url: "https://github.com/naeliofreires/minicurso-wtisc-2018",
    homepage: "",
    size: 73,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 135504600,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzU1MDQ2MDA=",
    name: "modelo-carrinho-de-compras",
    full_name: "naeliofreires/modelo-carrinho-de-compras",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/modelo-carrinho-de-compras",
    description: "SIMPLES MODELO DE CARRINHO DE COMPRAS EM TYPESCRIPT",
    fork: false,
    url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras",
    forks_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/modelo-carrinho-de-compras/deployments",
    created_at: "2018-05-30T22:40:47Z",
    updated_at: "2018-06-27T17:42:52Z",
    pushed_at: "2018-06-27T17:42:51Z",
    git_url: "git://github.com/naeliofreires/modelo-carrinho-de-compras.git",
    ssh_url: "git@github.com:naeliofreires/modelo-carrinho-de-compras.git",
    clone_url:
      "https://github.com/naeliofreires/modelo-carrinho-de-compras.git",
    svn_url: "https://github.com/naeliofreires/modelo-carrinho-de-compras",
    homepage: "",
    size: 9,
    stargazers_count: 0,
    watchers_count: 0,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 178562258,
    node_id: "MDEwOlJlcG9zaXRvcnkxNzg1NjIyNTg=",
    name: "picture-in-picture-basic",
    full_name: "naeliofreires/picture-in-picture-basic",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/picture-in-picture-basic",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/picture-in-picture-basic",
    forks_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/picture-in-picture-basic/deployments",
    created_at: "2019-03-30T13:30:51Z",
    updated_at: "2019-03-30T23:23:10Z",
    pushed_at: "2019-03-30T13:51:53Z",
    git_url: "git://github.com/naeliofreires/picture-in-picture-basic.git",
    ssh_url: "git@github.com:naeliofreires/picture-in-picture-basic.git",
    clone_url: "https://github.com/naeliofreires/picture-in-picture-basic.git",
    svn_url: "https://github.com/naeliofreires/picture-in-picture-basic",
    homepage: null,
    size: 2366,
    stargazers_count: 1,
    watchers_count: 1,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 1,
    default_branch: "master"
  },
  {
    id: 81771878,
    node_id: "MDEwOlJlcG9zaXRvcnk4MTc3MTg3OA==",
    name: "POO",
    full_name: "naeliofreires/POO",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/POO",
    description:
      "TRABALHOS REALIZADOS NA CADEIRA DE PROGRAMAÇÃO ORIENTADO A OBJETOS",
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/POO",
    forks_url: "https://api.github.com/repos/naeliofreires/POO/forks",
    keys_url: "https://api.github.com/repos/naeliofreires/POO/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/POO/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/naeliofreires/POO/teams",
    hooks_url: "https://api.github.com/repos/naeliofreires/POO/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/POO/issues/events{/number}",
    events_url: "https://api.github.com/repos/naeliofreires/POO/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/POO/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/POO/branches{/branch}",
    tags_url: "https://api.github.com/repos/naeliofreires/POO/tags",
    blobs_url: "https://api.github.com/repos/naeliofreires/POO/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/POO/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/POO/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/naeliofreires/POO/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/POO/statuses/{sha}",
    languages_url: "https://api.github.com/repos/naeliofreires/POO/languages",
    stargazers_url: "https://api.github.com/repos/naeliofreires/POO/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/POO/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/POO/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/POO/subscription",
    commits_url: "https://api.github.com/repos/naeliofreires/POO/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/POO/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/POO/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/POO/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/POO/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/POO/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/naeliofreires/POO/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/POO/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/naeliofreires/POO/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/POO/issues{/number}",
    pulls_url: "https://api.github.com/repos/naeliofreires/POO/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/POO/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/POO/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/naeliofreires/POO/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/POO/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/POO/deployments",
    created_at: "2017-02-13T01:25:52Z",
    updated_at: "2018-04-30T22:26:08Z",
    pushed_at: "2017-02-13T01:41:54Z",
    git_url: "git://github.com/naeliofreires/POO.git",
    ssh_url: "git@github.com:naeliofreires/POO.git",
    clone_url: "https://github.com/naeliofreires/POO.git",
    svn_url: "https://github.com/naeliofreires/POO",
    homepage: "",
    size: 60,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 193105030,
    node_id: "MDEwOlJlcG9zaXRvcnkxOTMxMDUwMzA=",
    name: "react-app-with-electron",
    full_name: "naeliofreires/react-app-with-electron",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/react-app-with-electron",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/react-app-with-electron",
    forks_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/react-app-with-electron/deployments",
    created_at: "2019-06-21T13:44:43Z",
    updated_at: "2019-06-21T13:45:44Z",
    pushed_at: "2019-06-21T13:45:42Z",
    git_url: "git://github.com/naeliofreires/react-app-with-electron.git",
    ssh_url: "git@github.com:naeliofreires/react-app-with-electron.git",
    clone_url: "https://github.com/naeliofreires/react-app-with-electron.git",
    svn_url: "https://github.com/naeliofreires/react-app-with-electron",
    homepage: null,
    size: 174,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 167274670,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjcyNzQ2NzA=",
    name: "react-ssr-redux-router-styled",
    full_name: "naeliofreires/react-ssr-redux-router-styled",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/react-ssr-redux-router-styled",
    description: null,
    fork: false,
    url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled",
    forks_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/react-ssr-redux-router-styled/deployments",
    created_at: "2019-01-24T00:24:35Z",
    updated_at: "2019-01-24T15:38:10Z",
    pushed_at: "2019-01-24T15:38:09Z",
    git_url: "git://github.com/naeliofreires/react-ssr-redux-router-styled.git",
    ssh_url: "git@github.com:naeliofreires/react-ssr-redux-router-styled.git",
    clone_url:
      "https://github.com/naeliofreires/react-ssr-redux-router-styled.git",
    svn_url: "https://github.com/naeliofreires/react-ssr-redux-router-styled",
    homepage: null,
    size: 169,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 141503345,
    node_id: "MDEwOlJlcG9zaXRvcnkxNDE1MDMzNDU=",
    name: "React.JS-treinaweb",
    full_name: "naeliofreires/React.JS-treinaweb",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/React.JS-treinaweb",
    description:
      "REPOSITORIO CRIADO PARA GUARDAR OS EXERCICIOS REALIZADOS NO CURSO DE REACT JS NA PLATAFORMA DE ENSINO TreinaWeb",
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/React.JS-treinaweb",
    forks_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/teams",
    hooks_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/React.JS-treinaweb/deployments",
    created_at: "2018-07-19T00:17:15Z",
    updated_at: "2018-07-27T01:49:10Z",
    pushed_at: "2018-07-27T01:49:08Z",
    git_url: "git://github.com/naeliofreires/React.JS-treinaweb.git",
    ssh_url: "git@github.com:naeliofreires/React.JS-treinaweb.git",
    clone_url: "https://github.com/naeliofreires/React.JS-treinaweb.git",
    svn_url: "https://github.com/naeliofreires/React.JS-treinaweb",
    homepage: "",
    size: 273,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 187020651,
    node_id: "MDEwOlJlcG9zaXRvcnkxODcwMjA2NTE=",
    name: "redux-saga",
    full_name: "naeliofreires/redux-saga",
    private: false,
    owner: {
      login: "naeliofreires",
      id: 16665625,
      node_id: "MDQ6VXNlcjE2NjY1NjI1",
      avatar_url: "https://avatars0.githubusercontent.com/u/16665625?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/naeliofreires",
      html_url: "https://github.com/naeliofreires",
      followers_url: "https://api.github.com/users/naeliofreires/followers",
      following_url:
        "https://api.github.com/users/naeliofreires/following{/other_user}",
      gists_url: "https://api.github.com/users/naeliofreires/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/naeliofreires/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/naeliofreires/subscriptions",
      organizations_url: "https://api.github.com/users/naeliofreires/orgs",
      repos_url: "https://api.github.com/users/naeliofreires/repos",
      events_url: "https://api.github.com/users/naeliofreires/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/naeliofreires/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/naeliofreires/redux-saga",
    description: "Simples repositório para conhecimento de ReduxSaga!",
    fork: false,
    url: "https://api.github.com/repos/naeliofreires/redux-saga",
    forks_url: "https://api.github.com/repos/naeliofreires/redux-saga/forks",
    keys_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/naeliofreires/redux-saga/teams",
    hooks_url: "https://api.github.com/repos/naeliofreires/redux-saga/hooks",
    issue_events_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/issues/events{/number}",
    events_url: "https://api.github.com/repos/naeliofreires/redux-saga/events",
    assignees_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/branches{/branch}",
    tags_url: "https://api.github.com/repos/naeliofreires/redux-saga/tags",
    blobs_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/languages",
    stargazers_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/stargazers",
    contributors_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/contributors",
    subscribers_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/subscribers",
    subscription_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/subscription",
    commits_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/naeliofreires/redux-saga/merges",
    archive_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/downloads",
    issues_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/labels{/name}",
    releases_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/naeliofreires/redux-saga/deployments",
    created_at: "2019-05-16T12:10:59Z",
    updated_at: "2019-05-16T12:27:20Z",
    pushed_at: "2019-05-16T12:26:00Z",
    git_url: "git://github.com/naeliofreires/redux-saga.git",
    ssh_url: "git@github.com:naeliofreires/redux-saga.git",
    clone_url: "https://github.com/naeliofreires/redux-saga.git",
    svn_url: "https://github.com/naeliofreires/redux-saga",
    homepage: "",
    size: 536,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  }
];

describe("Repositories Saga", () => {
  it("should be able to fetch repositories", async () => {
    const dispatched = [];

    await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        }
      },
      getRepositories
    ).toPromise();

    expect(dispatched).toContainEqual(RepositoriesActios.getSuccess(response));
  });
});
