'use server'

import { CreateUserParams } from "@/types"
import { handleError } from "../utils"

export const createUser  = async (user: CreateUserParams) => {
  try {
    console.log("prin ln")
  } catch (error) {
    handleError(error)
  }
}