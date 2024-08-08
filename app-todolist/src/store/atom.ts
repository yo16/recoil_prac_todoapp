import { atom, selector } from 'recoil';

export const todoAtom = atom({
    key: 'todosAtom',
    default: [
        {
            id: 1,
            title: '洗濯ものの取り込み',
            isDone: false,
        },
        {
            id: 2,
            title: '部屋の掃除',
            isDone: false,
        },
        {
            id: 3,
            title: '夕飯の買い物',
            isDone: false,
        },
    ],
});

export const todoLastIdSelector = selector({
    key: 'todoLastIdSelector',
    get: ({ get }) => {
        // Todoリスト最後のTodoを取得
        const todo = get(todoAtom);
        return todo.at(-1)?.id ?? 0;
    },
});
