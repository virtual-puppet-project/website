/*A small script to retrieve the latest release
for VPupPr-Nightly-Releases, to create a rolling
release hyperlink*/

/*temp comment, compiling resources
uses json to fetch data
https://stackoverflow.com/questions/60789862/url-of-the-last-artifact-of-a-github-action-build

1. https://docs.github.com/en/rest/actions/workflow-runs#list-workflow-runs-for-a-repository
2. https://docs.github.com/en/rest/actions/artifacts#list-workflow-run-artifacts
3. https://docs.github.com/en/rest/actions/artifacts#download-an-artifact
it's just filtering the latest workflow runs by name, finding the run the highest run number, 
and then getting the artifacts for that run number

pick jquery ajax and send various requests 
https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/

jquery click event
https://api.jquery.com/click/
*/