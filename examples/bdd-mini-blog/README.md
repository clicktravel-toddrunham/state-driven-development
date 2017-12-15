# BDD Mini Blog

A small blog repo to indicate how SDD could be used with BDD and whether

## BEHAVIOURS

### Feature: Readers can view blog posts

#### Scenario: The reader can view all posts
* [ACTION:FETCH_POSTS](#) A reader lands on the home page
* [STATE:FETCHED_POSTS](#) The posts are shown

#### Scenario: The reader can select a post
* [ACTION:SELECT_POST](#) A reader clicks on a post link
* [STATE:SELECTED_POST](#) The post is shown

#### Scenario: The reader can delete a post
* [ACTION:DELETE_POST](#) A reader clicks on a post delete link
* [STATE:DELETED_POST](#) The post is deleted

#### Scenario: The reader can add a post
* [ACTION:ADD_POST](#) A reader clicks the add a post link
* [STATE:ADDING_POST](#) The add post page is shown
* [ACTION:SUBMIT_POST](#) A reader submits a post
* [STATE:FETCHED_POSTS](#) The posts are shown
