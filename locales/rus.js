export default defineI18nLocale(async (locale) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();

  return {
    home_title: "Главная страница",
    home_btn: "Вернуться на главную страницу",
    about_title: "О нас",
    about_btn: "Вернуться на страницу о нас",
    name: "name - Это не приходит с API",
    ...data,
  };
});
