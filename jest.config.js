module.exports = {
  preset: 'ts-jest', // 假设你是用 TypeScript 写的测试文件，使用 ts-jest 预设
  testEnvironment: 'node', // 根据你的实际运行环境选择，这里以 Node.js 为例
  transform: {
      "^.+\\.tsx?$": "ts-jest" // 配置如何转换.ts 和.tsx 文件，同样针对 TypeScript 情况
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // 重点配置如下，添加这行来启用 ES6 模块支持
  transformIgnorePatterns: ["node_modules/(?!(jest-)?@?react-native|@?react-navigation)"],
};