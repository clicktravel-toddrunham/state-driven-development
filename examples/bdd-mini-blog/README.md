# BDD Mini Blog

A small blog repo to indicate how SDD could be used with BDD and whether it could integrate
with it.

## State type URIs

To test a specific state type add `/state:STATE_TYPE` I.E `/state:FETCHED_POSTS`
to the URL. This also activates a menu list of the available state types.

## BEHAVIOURS

<details>
  <summary>
  Feature: Readers can view blog posts

  </summary>

Scenario: The reader can view all posts
* [ACTION:FETCH_POSTS](#) A reader lands on the home page
* [STATE:FETCHED_POSTS](#) The posts are shown

Scenario: The reader can select a post
* [ACTION:SELECT_POST](#) A reader clicks on a post link
* [STATE:SELECTED_POST](#) The post is shown

Scenario: The reader can delete a post
* [ACTION:DELETE_POST](#) A reader clicks on a post delete link
* [STATE:DELETED_POST](#) The post is deleted

Scenario: The reader can add a post
* [ACTION:ADD_POST](#) A reader clicks the add a post link
* [STATE:ADDING_POST](#) The add post page is shown
-
* [ACTION:SUBMIT_POST](#) A reader submits a post
* [STATE:FETCHED_POSTS](#) The posts are shown

</details>


