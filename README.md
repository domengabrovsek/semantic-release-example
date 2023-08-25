# Semantic Release Automation Example

This repository demonstrates an automated process for semantic versioning and releasing a project using GitHub Actions. The workflow is triggered when a pull request is merged into the master branch, and it performs the following actions:

- Computes the next semantic version based on conventional commit messages.
- Updates the version in `package.json`.
- Commits the change and pushes it to the master branch.
- Creates a new Git tag for the new version.
- Generates and publishes a GitHub release with release notes.

## Workflow

Here's an overview of the main workflow file [`create-new-tag-and-release.yml`](.github/workflows/create-new-tag-and-release.yml):

1. **Checkout Code**: Checks out the code from the repository.
2. **Setup Node.js**: Sets up the specified Node.js environment.
3. **Install Dependencies**: Installs the necessary dependencies using `npm ci`.
4. **Determine Next Version**: Runs a custom script to calculate the next semantic version based on commit messages.
5. **Setup Git User**: Configures the Git user for subsequent operations.
6. **Update package.json**: Updates the `package.json` file with the new version.
7. **Commit Changes**: Commits the changes to `package.json`.
8. **Push Changes**: Pushes the changes and tags to the remote repository.
9. **Create Release**: Creates a GitHub release with automatically generated release notes.

## Usage

If you wish to experiment with or adapt this workflow:

1. **Fork the Repository**: Click the "Fork" button at the top right of this page.
2. **Clone Your Fork**: Clone your fork to your local machine.
3. **Make Changes**: Modify the code, workflow, or scripts as needed.
4. **Commit and Push**: Commit your changes and push them to GitHub.
5. **Create a Pull Request**: Open a pull request to merge your changes into the master branch. Once merged, the workflow will be triggered.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements

- [softprops/action-gh-release](https://github.com/softprops/action-gh-release): Used to create and publish GitHub releases.

## Contact

For any questions or feedback, please [open an issue](https://github.com/domengabrovsek/semantic-release-example/issues) on GitHub.

---

Feel free to modify or expand the README as needed. If you'd like to add any specific sections or details, please let me know!