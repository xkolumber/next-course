"use client";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sortedUsers = _.orderBy(users, ["name"]);
          console.log(sortedUsers);
        }}
      >
        Show
      </button>
    </main>
  );
}
