<details>
	<summary>∨</summary>
	<ul>
		<li><button type="button">Other poem title</button></li>
		<li><button type="button">Another poem title</button></li>
	</ul>
</details>

<style>
	summary {
		border: 1px solid rgba(0, 0, 0, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		list-style: none;
		height: 2em;
		transform: rotate(-90deg);
	}
	summary:focus {
		border: 2px solid #000;
		outline: none;
	}
	details {
		align-items: center;
		display: flex;
		flex-shrink: 0;
		justify-content: center;
		height: 2em;
		position: relative;
		width: 2em;
	}
	details[open] > summary {
		transform: rotate(0deg);
	}
	details[open] > ul {
		background-color: var(--background-color);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		gap: 1em;
		list-style: none;
		margin: 0;
		padding: 1em;
		position: absolute;
		right: 0;
		top: 2em;
		width: calc(50vw - 3em);
	}
</style>
