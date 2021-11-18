import path from 'path'

import type { DataContext } from '..'

export class FileActions {
  constructor (private ctx: DataContext) {}

  async writeFileInProject (relativePath: string, data: any) {
    if (!this.ctx.currentProject) {
      throw new Error(`Cannot write file in project without active project`)
    }

    const filePath = path.join(this.ctx.currentProject?.projectRoot, relativePath)

    await this.ctx.fs.writeFile(
      filePath,
      data,
    )
  }

  async removeFileInProject (relativePath: string) {
    if (!this.ctx.currentProject) {
      throw new Error(`Cannot remove file in project without active project`)
    }

    await this.ctx.fs.remove(path.join(this.ctx.currentProject?.projectRoot, relativePath))
  }

  async checkIfFileExists (relativePath: string) {
    if (!this.ctx.currentProject) {
      throw new Error(`Cannot check file in project exists without active project`)
    }

    const filePath = path.join(this.ctx.currentProject?.projectRoot, relativePath)

    return await this.ctx.fs.stat(filePath)
  }
}
