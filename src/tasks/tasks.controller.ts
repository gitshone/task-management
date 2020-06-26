import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    /**
     * Get task by id
     * 
     * @param id 
     */
    @Get('/:id')
    async getTaskById(@Param('id') id: string): Promise<Task> {
        return await this.tasksService.getTaskById(id);
    }

    /**
     * Creates a task
     * 
     * @param createTaskDto 
     */
    @Post()
    async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {

        // creates new task
        return await this.tasksService.createTask(createTaskDto);        
    }

    @Patch('/:id/status')
    async updateTaskStatus( )

    /**
     * Deletes a new task
     * 
     * @param id 
     */
    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
        this.tasksService.deleteTask(id);
    }
}
